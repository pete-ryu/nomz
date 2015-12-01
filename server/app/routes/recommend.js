'use strict';

var router = require('express').Router(),
  RecommendationService = require('../services/Recommendations.js');

var ensureAuthenticated = function(req, res, next) {
  next();
}

router.post('/', ensureAuthenticated, function(req, res) {
  var choices = req.body.choices,
    lat = req.body.lat,
    lng = req.body.long;

  var rs = new RecommendationService();
  rs.recommend(lat, lng, choices)
    .then(function(venues) {
      res.json(venues);
    })
    .catch(function(err) {
      res.status(500).send("error while getting recommendations: ", err);
    });
});

module.exports = router;
