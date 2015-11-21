'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  imageUrl: {
    type: String
  },
  venue: {
    type: String
  },
  rating: {
    type: String
  },
  tags: {
    type: [String]
  }
  
})

mongoose.model('MenuItem', schema);