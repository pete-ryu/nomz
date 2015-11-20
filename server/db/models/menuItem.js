'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  image: {
    url: {
      type: String
    },
    author: {
      type: ObjectId,
      ref: 'User'
    },
    date: {
      type: Date,
      default: new Date
    }
  },
  venue: {
    type: ObjectId,
    ref: 'Venue'
  },
  rating: {
    type: String,
  },
  tags: {
    type: [String]
  }
  
})

mongoose.model('menuItem', schema);