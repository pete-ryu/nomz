'use strict';
var router = require('express').Router();
var _ = require('lodash');
var fsHelper = require('./foursquare-helper');
var Promise = require('bluebird');

module.exports = router;

var ensureAuthenticated = function (req, res, next) {
  next(); // dont worry about authentication for now
}

// var ensureAuthenticated = function (req, res, next) {
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         res.status(401).end();
//     }
// };

router.get('/start', ensureAuthenticated, function (req, res) {
  var ll = req.query.lat+","+req.query.long;
  var params = {
    'll': ll,
    'categoryId': '4d4b7105d754a06374d81259',
    'radius': 1000
   };
   var retArr = [];
   fsHelper.venues(params)
   .then(function(response) {
     return Promise.map(response.response.venues, function(v) {
       return fsHelper.venue({ venue_id: v.id })
     })
    })
    .then(function(arr) {
      arr.forEach(function(venue) {
        var venueGroup = getVenueGroup(venue.response.venue.photos.groups);
        venueGroup.items.forEach(function(image) {
          var size = "300x500";
          var imgObj = {
            id: image.id,
            url: image.prefix + size + image.suffix,
            venue: venue.response.venue.id,
            categories: venue.response.venue.categories
          };
          retArr.push(imgObj);
        })
      })
    })
    .then(function() { res.json(retArr) })
    .catch(function(err) { res.sendStatus(404); })
});


function getVenueGroup(groups) {
  for(var x=0; x<groups.length; x++) {
    if(groups[x].type === "venue") { return groups[x]; }
  }
  return {};
}
