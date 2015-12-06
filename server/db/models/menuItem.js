'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  category: {
    type: String
  },
  venue: {
    type: String,
    ref: 'Venue'
  },
  rating: {
    type: String
  },
  description: {
    type: String
  },
  tags: {
    type: [String]
  },
  cuisine: {
    type: String
  },  
  images: {
    type: [String]
  }

})

mongoose.model('MenuItem', schema);
