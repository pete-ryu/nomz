'use strict';
var router = require('express').Router();
var _ = require('lodash');

module.exports = router;


router.get('/', function (req, res) {
  var tagChoices = [];
  for(let x=65; x<91; x++) {
    tagChoices.push(String.fromCharCode(x))
  }

  var images = [];
  for(let x=1; x<21; x++) {
    images.push({
      url: 'http://lorempixel.com/g/400/400/cats/dummy-text'+x,
      tags: [ tagChoices[x], tagChoices[x+2], tagChoices[7] ]
    });
  };
  // var resp = {
  //   images: images
  // };
  var resp = images;

  res.json(resp);
});
