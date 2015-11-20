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
  }, // Or should this be a separate schema
  phone: {
    type: String
  },
  hours: {
    type: String
  },
  location: {
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
    ref: 'menuItem'
  }]
})


mongoose.model('venue', schema);