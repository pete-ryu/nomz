'use strict';
var router = require('express').Router();
var _ = require('lodash');
var fsVenue = require('foursquarevenues')(process.env.FOURSQUARE_CLIENT_ID, process.env.FOURSQUARE_CLIENT_SECRET)

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

router.get('/near', ensureAuthenticated, function (req, res) {
  var ll = req.query.lat+","+req.query.long;
  var params = {
    'll': ll,
    'categoryId': '4d4b7105d754a06374d81259',
    'radius': 1000
   };
  fsVenue.getVenues(params, function(err, venues) {
    if(!err) {
      return res.json(venues.response.venues.map(function(v) {
        return _.pick(v, 'id', 'name', 'contact', 'location', 'categories');
      }))
    } else {
      return res.sendStatus(404);
    }
  });
});

router.get('/:id', ensureAuthenticated, function(req, res) {
  fsVenue.getVenue({ venue_id: req.params.id }, function(err, venue) {
    if(!err) {
      res.json(_.pick(venue.response.venue,
        'id', 'name', 'contact', 'location', 'categories', 'url', 'ratings', 'hours', 'attributes'));
    } else {
      return res.sendStatus(404);
    }
  })
})
