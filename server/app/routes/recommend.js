'use strict';

var router = require('express').Router(),
  // RecommendationService = require('../services/Recommendations.js'),
  fsHelper = require('./foursquare-helper'),
  _ = require('lodash');

module.exports = router;

var ensureAuthenticated = function(req, res, next) {
  next();
}

router.post('/', ensureAuthenticated, function (req, res) {
  var prefs = req.body;
  var ll = req.query.lat+","+req.query.long;
  var params = {
    'll': ll,
    'categoryId': '4d4b7105d754a06374d81259',
    'radius': 1000
   };
   fsHelper.venues(params)
   .then(venues => venues.response.venues.map(v =>
     _.pick(v, 'id', 'name', 'location', 'categories', 'attributes', 'stats')
   ))
  .then(venues => makeRecommendation(prefs, venues))
  .then(arr => res.json(arr))
  .catch(function(err) { res.sendStatus(404); })
});

var makeRecommendation = function(prefs, venueList) {
  venueList.forEach(venue => venue.nomzRank = 0);
  venueList.forEach(venue => {
    let rank = 0;
    let venuePrefs = 0;
    let catRank = 0;

    // check if liked/disliked venue
    if(prefs.venue[venue]) {
      let likes = prefs.venue[venue].likes;
      let dislikes = prefs.venue[venue].dislikes;
      venuePrefs = (likes - disilkes)/prefs.count;
    }
    rank += venuePrefs;

    // check if liked/disliked tags...
    // TODO: this!
    venue.nomzRank = rank;
  })
  return _.sortBy(venueList, 'nomzRank');
}



// router.post('/', ensureAuthenticated, function(req, res) {
//   var choices = req.body,
//     ll = req.query.lat+","+req.query.long;
//
//
//   var rs = new RecommendationService();
//   rs.recommend(lat, long, choices)
//     .then(function(venues) {
//       res.json(venues);
//     })
//     .catch(function(err) {
//       res.status(500).send("error while getting recommendations: ", err);
//     });
// });
