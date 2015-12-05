'use strict';
var router = require('express').Router();
var _ = require('lodash');

module.exports = router;


router.get('/', function (req, res) {
  var tagChoices = [];
  for(let x=65; x<91; x++) {
    tagChoices.push(String.fromCharCode(x))
  }

  // var images = [];
  // for(let x=1; x<21; x++) {
  //   images.push({
  //     url: 'http://lorempixel.com/g/400/400/cats/dummy-text'+x,
  //     tags: [ tagChoices[x], tagChoices[x+2], tagChoices[7] ]
  //   });
  // };
  // var resp = {
  //   images: images
  // };
  var resp = randomizeImages();
  res.json(resp);
});



function randomizeImages() {
  var images = [
        {
          "_id": "62960452",
          "name": "Cavatelli Casserole",
          "description": "Wild Boar Ragu, Sarvecchio Cheese",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "wild",
            "boar",
            "cheese"
          ],
          url: "http://media-cdn.tripadvisor.com/media/photo-s/09/6f/c4/bc/delmonico-s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960452",
          "name": "Cavatelli Casserole",
          "description": "Wild Boar Ragu, Sarvecchio Cheese",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "wild",
            "boar",
            "cheese"
          ],
          url: "http://media-cdn.tripadvisor.com/media/photo-s/09/04/17/31/delmonico-s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960452",
          "name": "Cavatelli Casserole",
          "description": "Wild Boar Ragu, Sarvecchio Cheese",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "wild",
            "boar",
            "cheese"
          ],
          url: "http://d5u4si4z0f8i6.cloudfront.net/reviews/2619428/thumb_275.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960452",
          "name": "Cavatelli Casserole",
          "description": "Wild Boar Ragu, Sarvecchio Cheese",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "wild",
            "boar",
            "cheese"
          ],
          url: "http://resizer.otstatic.com/v1/fDzI465IL8%252B687zSupRS4Q/23688754.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960452",
          "name": "Cavatelli Casserole",
          "description": "Wild Boar Ragu, Sarvecchio Cheese",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "wild",
            "boar",
            "cheese"
          ],
          url: "http://resizer.otstatic.com/v2/photos/legacy/23895572.jpg",
          "cuisine": "Steakhouse"
        },

        {
          "_id": "62960458",
          "name": "Eggs Benedict",
          "description": "Created at our stoves in 1860",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "eggs",
            "benedict"
          ],
          "url": "https://irs0.4sqi.net/img/general/240x240/7604414_7H2mAy4vVaXxqqee-fpW2kDVdjKE_S4IHxANcPOQfLc.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960458",
          "name": "Eggs Benedict",
          "description": "Created at our stoves in 1860",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "eggs",
            "benedict"
          ],
          "url": "https://irs0.4sqi.net/img/general/240x240/LW18uzE_1Q7OiIQmF2rCmgm3FnRs5JCKjnbow_CawFs.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960458",
          "name": "Eggs Benedict",
          "description": "Created at our stoves in 1860",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "eggs",
            "benedict"
          ],
          "url":
            "https://s-media-cache-ak0.pinimg.com/236x/18/7d/8a/187d8aa33939e16b478fb994941a4f5a.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960458",
          "name": "Eggs Benedict",
          "description": "Created at our stoves in 1860",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "eggs",
            "benedict"
          ],
          "url":
            "http://s3-media4.fl.yelpcdn.com/bphoto/zZCupyGnhkyWp7_qOfKXBg/348s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "62960458",
          "name": "Eggs Benedict",
          "description": "Created at our stoves in 1860",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "eggs",
            "benedict"
          ],
          "url":
            "http://ipinionsyndicate.com/wp-content/uploads/2013/02/Veggie-eggs-Benedict.jpg",
          "cuisine": "Steakhouse"
        },




        {
          "_id": "70229658",
          "name": "Charcuterie & Cheese",
          "description": "Chef's Selection of Farm House Cheese and Artisanal Cured Meats",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "cheese"
          ],
          "url":
            "https://s-media-cache-ak0.pinimg.com/736x/7d/54/e6/7d54e6cab40c35107634092cdf3e8767.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229658",
          "name": "Charcuterie & Cheese",
          "description": "Chef's Selection of Farm House Cheese and Artisanal Cured Meats",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "cheese"
          ],
          "url":
            "http://img2.10bestmedia.com/Images/Photos/67490/capital-grille-wine-room_54_990x660_201406011247.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229658",
          "name": "Charcuterie & Cheese",
          "description": "Chef's Selection of Farm House Cheese and Artisanal Cured Meats",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "cheese"
          ],
          "url":
            "http://img2.10bestmedia.com/Images/Photos/101448/vitos-chophouse-vito-display_54_990x660_201406011644.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229658",
          "name": "Charcuterie & Cheese",
          "description": "Chef's Selection of Farm House Cheese and Artisanal Cured Meats",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "cheese"
          ],
          "url":
            "http://img1.10bestmedia.com/Images/Photos/71274/shulas-steak-house-lobster_54_990x660_201406011307.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229658",
          "name": "Charcuterie & Cheese",
          "description": "Chef's Selection of Farm House Cheese and Artisanal Cured Meats",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "cheese"
          ],
          "url":
            "http://d5u4si4z0f8i6.cloudfront.net/reviews/2619428/thumb_275.jpg",
          "cuisine": "Steakhouse"
        },



        {
          "_id": "70229664",
          "name": "Hot Fried Chicken",
          "description": "Sesame Slaw, spicy mayo, sweet pickles, brioche",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "spicy",
            "sweet",
            "brioche",
            "hot",
            "fried",
            "chicken"
          ],
          "url":
            "http://www.eatinglv.com/wordpress/wp-content/gallery/delmonico-fried-chicken/delmonico-013-large.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229664",
          "name": "Hot Fried Chicken",
          "description": "Sesame Slaw, spicy mayo, sweet pickles, brioche",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "spicy",
            "sweet",
            "brioche",
            "hot",
            "fried",
            "chicken"
          ],
          "url":
            "http://s3-media2.fl.yelpcdn.com/bphoto/gn0n_zaXedp4CakipmlXEg/348s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229664",
          "name": "Hot Fried Chicken",
          "description": "Sesame Slaw, spicy mayo, sweet pickles, brioche",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "spicy",
            "sweet",
            "brioche",
            "hot",
            "fried",
            "chicken"
          ],
          "url":
            "http://s3-media3.fl.yelpcdn.com/bphoto/wVprfqW-Y_xtf4oVn_fBmA/348s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229664",
          "name": "Hot Fried Chicken",
          "description": "Sesame Slaw, spicy mayo, sweet pickles, brioche",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "spicy",
            "sweet",
            "brioche",
            "hot",
            "fried",
            "chicken"
          ],
          "url":
            "http://s3-media1.fl.yelpcdn.com/bphoto/iL7YwhJQxhzV_7R-1LhG3w/348s.jpg",
          "cuisine": "Steakhouse"
        },
        {
          "_id": "70229664",
          "name": "Hot Fried Chicken",
          "description": "Sesame Slaw, spicy mayo, sweet pickles, brioche",
          "venue": "3fd66200f964a520e6e81ee3",
          "tags": [
            "spicy",
            "sweet",
            "brioche",
            "hot",
            "fried",
            "chicken"
          ],
          "url":
            "http://s3-media2.fl.yelpcdn.com/bphoto/fhmviX1c-uzi70g8ff4KnA/348s.jpg",
          "cuisine": "Steakhouse"
        }
  ];
  return _.shuffle(images);
}
