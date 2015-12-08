'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var shortId = require('shortid');
var _ = require('lodash');
var Promise = require('bluebird');

var schema = new mongoose.Schema({
    _id: { // Foursquare Token
        type: String,
        unique: true,
        default: shortId.generate
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    salt: {
        type: String,
        select: false
    },
    following: {
        type: [Number],
        ref: 'User'
    },
    posts: [{
        _id: {
            type: String,
            default: shortId.generate
        },
        imageUrl: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        },
        caption: {
          type: String
        },
        likes: {
          type: Number
        },
        menuItem: {
          type: String,
          ref: 'MenuItem'
        }
    }]
});

// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.
var generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function (plainText, salt) {
    var hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.salt = this.constructor.generateSalt();
        this.password = this.constructor.encryptPassword(this.password, this.salt);
    }

    next();

});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;


schema.methods.correctPassword = function(candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
}

schema.methods.getFeed = function() {
    return this.model('User').populate(this, { path: 'following'})
        .then( user => {
            var friendsPosts = _.pluck(user.following, 'posts')
            return _.chain(friendsPosts)
                            .flatten()
                            .sortBy('date')
                            .reverse()
            
        })
}

schema.methods.getFollowers = function() {
    return this.model('User').find({ following: this._id})
        .then( followers => {
            return followers
        })
}

schema.methods.follow = function(userId) { 
    var followerIdx = this.following.indexOf(userId);
    if (followerIdx > -1) {
        var error = new Error('Aleady following that user')
        error.statusCode = 409
        return Promise.reject(error)
    }
    this.following.push(userId);
    return this.save()
}

schema.methods.unfollow = function(userId) {
    var followerIdx = this.following.indexOf(userId);
    if (followerIdx === -1) {
        var error = new Error('Not following this user')
        error.statusCode = 404
        return Promise.reject(error)
    }
    this.following.splice(followerIdx, 1)
    return this.save()
}


schema.methods.getFollowing = function() {
    return this.model('User').populate(this, { path: 'following'} )
        .then( user => {
            return user.following
        })
}
mongoose.model('User', schema);