'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String
  }, 
  zipCode: {
    type: String
  },
  phone: {
    type: String
  },
  hours: {
    type: String
  },
  location: {
    // Lat and Long coordinates
    type: [Number] 
  },
  description: {
    type: String
  },
  cuisine: {
    type: String
  },
  menuItems: [{
    type: ObjectId,
    ref: 'MenuItem'
  }]
})


mongoose.model('Venue', schema);