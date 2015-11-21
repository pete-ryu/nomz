var fsVenue = require('foursquarevenues')(process.env.FOURSQUARE_CLIENT_ID, process.env.FOURSQUARE_CLIENT_SECRET);
var Promise = require('bluebird');

var getVenues = function(params) {
  return new Promise(function(resolve, reject) {
    fsVenue.getVenues(params, function(err, venues) {
      if(err) {
        reject(err);
      } else {
        resolve(venues);
      }
    });
  });
}

var getVenue = function(params) {
  return new Promise(function(resolve, reject) {
    fsVenue.getVenue(params, function(err, venue) {
      if(err) {
        reject(err);
      } else {
        resolve(venue);
      }
    });
  });
}

module.exports = {
  venue: getVenue,
  venues: getVenues
}
