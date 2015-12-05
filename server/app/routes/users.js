'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var _ = require('lodash');

// Find requested user by id and store as req.requested user
router.param('id', function (req, res, next, id) {
  // console.log(id);
  User.findById(id)
  .then(function (user) {
    if (!user) throw new Error(404);
    req.requestedUser = user;
    next();
  })
  .then(null, next);
});



// Get user profile w/ followers
// Use this to get their posts as well
router.get('/:id', function(req, res) {
  res.json(req.requestedUser);
})

// Get user follows
router.get('/:id/follows', function(req, res) {
  User.find({ follows: req.requestedUser._id });
})

// get user feed
router.get('/:id/feed', function(req, res) {
  User.findById(id)
    .populate('follows')
    .then(function(user) {
      var friendPosts = _.pluck(user.follows, 'posts')
      friendPosts = _.flatten(friendPosts);
      friendPosts = _.sortBy(friendPosts, 'date')
      res.json(friendPosts);
    })
})

// Add a post
// Need to figure out file upload

// Remove a post



// Add a follower
router.put('/:id/follow/:followedUser', function(req, res) {
  req.requestedUser.follows.push(req.params.followedUser._id);
  return req.requestedUser.save()
    .then(function(user) {
      res.json(user);
    })
})

// Remove a follower
router.put('/:id/unfollow/:followedUser', function(req, res) {
  var followerIdx = req.requestedUser.follows.indexOf(req.params.followedUser._id)
  if (followerIdx = -1) {
    return res.json(404)
  } else {
    req.requestedUser.follows.splice(followerIdx, 1)
    return req.requestedUser.save()
      .then(function(user) {
        res.sendStatus(204)
      })
  }
})

// update profile
router.put('/:id', function(req, res) {
  _.extend(req.requestedUser, req.body);
  return req.requestedUser.save() 
    .then(function(user) {
      res.status(204).json(user)
    })
    .then(null, next)
})


// delete profile
// Need to figure out auth first



module.exports = router;