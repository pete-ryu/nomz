'use strict';

var Promise = require('bluebird');

var mock_data = [{
    "id": "4a9ff5d9f964a520ba3d20e3",
    "name": "Starbucks",
    "contact": {
        "phone": "2127422490",
        "formattedPhone": "(212) 742-2490",
        "twitter": "starbucks",
        "facebook": "22092443056",
        "facebookUsername": "Starbucks",
        "facebookName": "Starbucks"
    },
    "location": {
        "address": "55 Broad St",
        "crossStreet": "at Beaver St",
        "lat": 40.70522025074112,
        "lng": -74.01124606166124,
        "distance": 102,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "55 Broad St (at Beaver St)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4a807ab1f964a52067f51fe3",
    "name": "Chipotle Mexican Grill",
    "contact": {
        "phone": "2123440941",
        "formattedPhone": "(212) 344-0941",
        "twitter": "chipotletweets"
    },
    "location": {
        "address": "2 Broadway",
        "crossStreet": "Broadway bet Beaver & Stone",
        "lat": 40.7042372264966,
        "lng": -74.01304214116337,
        "distance": 91,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "2 Broadway (Broadway bet Beaver & Stone)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1c1941735",
        "name": "Mexican Restaurant",
        "pluralName": "Mexican Restaurants",
        "shortName": "Mexican",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "561a8cd8498ed81f4384d0aa",
    "name": "La Colombe Torrefaction",
    "contact": {
        "phone": "2122200415",
        "formattedPhone": "(212) 220-0415",
        "twitter": "lacolombecoffee",
        "facebook": "259241814134790",
        "facebookName": "La Colombe Torrefaction"
    },
    "location": {
        "address": "67 Wall St",
        "lat": 40.70592822104461,
        "lng": -74.00841705876077,
        "distance": 353,
        "postalCode": "10005",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "67 Wall St",
            "New York, NY 10005",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "554a4688498eca79568879dd",
    "name": "Open Kitchen",
    "contact": {
        "phone": "2123467600",
        "formattedPhone": "(212) 346-7600",
        "twitter": "openkitchenfood",
        "facebook": "638892149467498",
        "facebookUsername": "openkitchennyc",
        "facebookName": "Open Kitchen NYC"
    },
    "location": {
        "address": "123 William St",
        "crossStreet": "btwn Fulton & John St",
        "lat": 40.70921016281538,
        "lng": -74.0068562116571,
        "distance": 669,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "123 William St (btwn Fulton & John St)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1c4941735",
        "name": "Restaurant",
        "pluralName": "Restaurants",
        "shortName": "Restaurant",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "524aeb0111d2ae4d1b1eea62",
    "name": "Bluestone Lane Coffee",
    "contact": {
        "phone": "6466843771",
        "formattedPhone": "(646) 684-3771",
        "twitter": "bluestonelane"
    },
    "location": {
        "address": "30 Broad St",
        "lat": 40.7064851227941,
        "lng": -74.01180841424717,
        "distance": 184,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "30 Broad St",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "520e5d1511d2dfea7d037d26",
    "name": "Open Kitchen",
    "contact": {
        "phone": "2127855555",
        "formattedPhone": "(212) 785-5555",
        "facebook": "638892149467498",
        "facebookUsername": "openkitchennyc",
        "facebookName": "Open Kitchen NYC"
    },
    "location": {
        "address": "15 William St",
        "crossStreet": "at Beaver St",
        "lat": 40.705441118544286,
        "lng": -74.00996067810887,
        "distance": 212,
        "postalCode": "10005",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "15 William St (at Beaver St)",
            "New York, NY 10005",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1f5941735",
        "name": "Gourmet Shop",
        "pluralName": "Gourmet Shops",
        "shortName": "Gourmet",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_gourmet_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4b7de017f964a52049d82fe3",
    "name": "Starbucks",
    "contact": {
        "phone": "2123851104",
        "formattedPhone": "(212) 385-1104",
        "twitter": "starbucks",
        "facebook": "22092443056",
        "facebookUsername": "Starbucks",
        "facebookName": "Starbucks"
    },
    "location": {
        "address": "195 Broadway",
        "crossStreet": "at Dey St",
        "lat": 40.710877660977175,
        "lng": -74.01075256721249,
        "distance": 680,
        "postalCode": "10007",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "195 Broadway (at Dey St)",
            "New York, NY 10007",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "5467ceec498e1b95c0575e73",
    "name": "Pier A Harbor House",
    "contact": {
        "phone": "2127850153",
        "formattedPhone": "(212) 785-0153"
    },
    "location": {
        "address": "22 Battery Pl",
        "crossStreet": "Battery Park",
        "lat": 40.7043413484697,
        "lng": -74.01765563539198,
        "distance": 449,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "22 Battery Pl (Battery Park)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d155941735",
        "name": "Gastropub",
        "pluralName": "Gastropubs",
        "shortName": "Gastropub",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/gastropub_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "55148c66498e987ed9d8e394",
    "name": "Le District",
    "contact": {
        "phone": "2129818588",
        "formattedPhone": "(212) 981-8588",
        "twitter": "ledistrictny",
        "facebook": "1494363484145094",
        "facebookUsername": "ledistrictnyc",
        "facebookName": "Le District"
    },
    "location": {
        "address": "225 Liberty St",
        "crossStreet": "at West St",
        "lat": 40.71310912351699,
        "lng": -74.01592271903733,
        "distance": 963,
        "postalCode": "10281",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "225 Liberty St (at West St)",
            "New York, NY 10281",
            "United States"
        ]
    },
    "categories": [{
        "id": "50be8ee891d4fa8dcc7199a7",
        "name": "Market",
        "pluralName": "Markets",
        "shortName": "Market",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/market_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "50bcb93ae4b0efcb4c84d434",
    "name": "The Dead Rabbit",
    "contact": {
        "phone": "6464227906",
        "formattedPhone": "(646) 422-7906",
        "twitter": "deadrabbitnyc"
    },
    "location": {
        "address": "30 Water St",
        "crossStreet": "btwn Broad St & Coenties Slip",
        "lat": 40.70319402536172,
        "lng": -74.01099931459613,
        "distance": 221,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "30 Water St (btwn Broad St & Coenties Slip)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d11e941735",
        "name": "Cocktail Bar",
        "pluralName": "Cocktail Bars",
        "shortName": "Cocktail",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4e90f1d7cc2127f5dac5935a",
    "name": "121 Fulton Street",
    "contact": {
        "phone": "6465456647",
        "formattedPhone": "(646) 545-6647",
        "twitter": "paigegroupny"
    },
    "location": {
        "address": "121 Fulton St",
        "crossStreet": "btwn Nassau & Dutch St.",
        "lat": 40.71020499859961,
        "lng": -74.00712017934165,
        "distance": 739,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "121 Fulton St (btwn Nassau & Dutch St.)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d14e941735",
        "name": "American Restaurant",
        "pluralName": "American Restaurants",
        "shortName": "American",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "556cb8c6498e751e51fbcf41",
    "name": "Parm",
    "contact": {
        "phone": "2127764927",
        "formattedPhone": "(212) 776-4927"
    },
    "location": {
        "address": "250 Vesey St",
        "crossStreet": "West St",
        "lat": 40.71454660989854,
        "lng": -74.01568171617936,
        "distance": 1110,
        "postalCode": "10080",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "250 Vesey St (West St)",
            "New York, NY 10080",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4aa7dd7af964a520b14d20e3",
    "name": "Starbucks",
    "contact": {
        "phone": "2129620439",
        "formattedPhone": "(212) 962-0439",
        "twitter": "starbucks",
        "facebook": "22092443056",
        "facebookUsername": "Starbucks",
        "facebookName": "Starbucks"
    },
    "location": {
        "address": "130 Fulton St",
        "crossStreet": "at Nassau St",
        "lat": 40.710352,
        "lng": -74.007946,
        "distance": 713,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "130 Fulton St (at Nassau St)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4c154c9a77cea593c401d260",
    "name": "Takahachi Bakery",
    "contact": {
        "phone": "2127915550",
        "formattedPhone": "(212) 791-5550",
        "facebook": "112319308787259",
        "facebookName": "TAKAHACHI BAKERY"
    },
    "location": {
        "address": "25 Murray St",
        "crossStreet": "at Church St",
        "lat": 40.71372322632139,
        "lng": -74.00873266967818,
        "distance": 1030,
        "postalCode": "10007",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "25 Murray St (at Church St)",
            "New York, NY 10007",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d16a941735",
        "name": "Bakery",
        "pluralName": "Bakeries",
        "shortName": "Bakery",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bakery_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4edd43af7bebc29455367992",
    "name": "Aroma Espresso Bar",
    "contact": {
        "phone": "2123460095",
        "formattedPhone": "(212) 346-0095",
        "twitter": "aromaus",
        "facebook": "199242969337",
        "facebookUsername": "AromaUS",
        "facebookName": "Aroma Espresso Bar"
    },
    "location": {
        "address": "100 Church St",
        "crossStreet": "at Barclay St",
        "lat": 40.7129311618756,
        "lng": -74.00964349508286,
        "distance": 924,
        "postalCode": "10007",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "100 Church St (at Barclay St)",
            "New York, NY 10007",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "5362a2ae498e3b18c22334be",
    "name": "Hudson Eats",
    "contact": {
        "phone": "2124177000",
        "formattedPhone": "(212) 417-7000",
        "twitter": "brookfieldplny",
        "facebook": "155529144607352",
        "facebookUsername": "BrookfieldPlNY",
        "facebookName": "Brookfield Place New York"
    },
    "location": {
        "address": "225 Liberty St",
        "crossStreet": "South End Avenue",
        "lat": 40.71301480708771,
        "lng": -74.01595714799222,
        "distance": 953,
        "postalCode": "10281",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "225 Liberty St (South End Avenue)",
            "New York, NY 10281",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d120951735",
        "name": "Food Court",
        "pluralName": "Food Courts",
        "shortName": "Food Court",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_foodcourt_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4a59f31df964a52095b91fe3",
    "name": "Leo's Bagels",
    "contact": {
        "phone": "2127854700",
        "formattedPhone": "(212) 785-4700",
        "twitter": "leosbagels",
        "facebook": "109247911496",
        "facebookUsername": "leosbagels",
        "facebookName": "Leo's Bagels"
    },
    "location": {
        "address": "3 Hanover Sq",
        "crossStreet": "at William St",
        "lat": 40.70483331392582,
        "lng": -74.00975409780321,
        "distance": 221,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "3 Hanover Sq (at William St)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d179941735",
        "name": "Bagel Shop",
        "pluralName": "Bagel Shops",
        "shortName": "Bagels",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bagels_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "51b77ea1454a57610205b352",
    "name": "Clinton Hall",
    "contact": {
        "phone": "2123636000",
        "formattedPhone": "(212) 363-6000",
        "twitter": "clintonhallny",
        "facebook": "464678176953800",
        "facebookUsername": "ClintonHallNY",
        "facebookName": "Clinton Hall"
    },
    "location": {
        "address": "90 Washington St",
        "crossStreet": "at Rector St",
        "lat": 40.70814918612303,
        "lng": -74.01453852653503,
        "distance": 406,
        "postalCode": "10006",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "90 Washington St (at Rector St)",
            "New York, NY 10006",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d117941735",
        "name": "Beer Garden",
        "pluralName": "Beer Gardens",
        "shortName": "Beer Garden",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "55387c1b498e4eca6482f4f5",
    "name": "Industry Kitchen",
    "contact": {
        "phone": "2124879600",
        "formattedPhone": "(212) 487-9600"
    },
    "location": {
        "address": "70 South St",
        "crossStreet": "Maiden Ln",
        "lat": 40.70497078189928,
        "lng": -74.00485922693818,
        "distance": 634,
        "postalCode": "10005",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "70 South St (Maiden Ln)",
            "New York, NY 10005",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d110941735",
        "name": "Italian Restaurant",
        "pluralName": "Italian Restaurants",
        "shortName": "Italian",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4a7ef289f964a52058f21fe3",
    "name": "Dig Inn Seasonal Market",
    "contact": {
        "phone": "2127851110",
        "formattedPhone": "(212) 785-1110",
        "twitter": "diginn",
        "facebook": "158613407523269",
        "facebookUsername": "diginnmarket",
        "facebookName": "Dig Inn"
    },
    "location": {
        "address": "80 Pine St",
        "crossStreet": "at Pearl St",
        "lat": 40.70612708888055,
        "lng": -74.00732102407498,
        "distance": 448,
        "postalCode": "10005",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "80 Pine St (at Pearl St)",
            "New York, NY 10005",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d14e941735",
        "name": "American Restaurant",
        "pluralName": "American Restaurants",
        "shortName": "American",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4116be80f964a520fc0b1fe3",
    "name": "Ulysses Folk House",
    "contact": {
        "phone": "2124820400",
        "formattedPhone": "(212) 482-0400",
        "twitter": "ulyssesfolkhous"
    },
    "location": {
        "address": "95 Pearl St",
        "crossStreet": "at Stone St",
        "lat": 40.70443641202592,
        "lng": -74.01012361049652,
        "distance": 196,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "95 Pearl St (at Stone St)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d116941735",
        "name": "Bar",
        "pluralName": "Bars",
        "shortName": "Bar",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4c43890cfb6eb713c1304e4a",
    "name": "55 Fulton Market",
    "contact": {
        "phone": "6465819261",
        "formattedPhone": "(646) 581-9261",
        "twitter": "keyfood",
        "facebook": "126122102671",
        "facebookUsername": "keyfood",
        "facebookName": "Key Food"
    },
    "location": {
        "address": "55 Fulton St",
        "lat": 40.708768745043265,
        "lng": -74.00499695069144,
        "distance": 757,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "55 Fulton St",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d118951735",
        "name": "Grocery Store",
        "pluralName": "Grocery Stores",
        "shortName": "Grocery Store",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "500d3cede4b0f6804faa90a8",
    "name": "Blue Spoon Coffee Co.",
    "contact": {
        "phone": "2128098880",
        "formattedPhone": "(212) 809-8880",
        "twitter": "bluespoonnyc"
    },
    "location": {
        "address": "90 William St",
        "crossStreet": "at Platt St",
        "lat": 40.708405993108784,
        "lng": -74.00780878897787,
        "distance": 549,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "90 William St (at Platt St)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1e0931735",
        "name": "Coffee Shop",
        "pluralName": "Coffee Shops",
        "shortName": "Coffee Shop",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "507f06e9e4b0d2368fcbada4",
    "name": "Fraunces Tavern",
    "contact": {
        "phone": "2129681776",
        "formattedPhone": "(212) 968-1776",
        "twitter": "porterhousenyc"
    },
    "location": {
        "address": "54 Pearl St",
        "crossStreet": "Broad St.",
        "lat": 40.703640200609286,
        "lng": -74.01122310845932,
        "distance": 169,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "54 Pearl St (Broad St.)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d116941735",
        "name": "Bar",
        "pluralName": "Bars",
        "shortName": "Bar",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "5400dc65498e3831aab00327",
    "name": "Barleycorn",
    "contact": {
        "phone": "2129330039",
        "formattedPhone": "(212) 933-0039",
        "twitter": "barleycornnyc",
        "facebook": "430798277058304",
        "facebookUsername": "barleycornnyc",
        "facebookName": "Barleycorn"
    },
    "location": {
        "address": "23 Park Pl",
        "crossStreet": "Church St",
        "lat": 40.713248142803295,
        "lng": -74.00896794293224,
        "distance": 974,
        "postalCode": "10007",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "23 Park Pl (Church St)",
            "New York, NY 10007",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d14e941735",
        "name": "American Restaurant",
        "pluralName": "American Restaurants",
        "shortName": "American",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "5047c785e4b0bcc0f416cdb3",
    "name": "GRK Fresh Greek - Financial District",
    "contact": {
        "phone": "2123852010",
        "formattedPhone": "(212) 385-2010",
        "twitter": "grkfresh"
    },
    "location": {
        "address": "111 Fulton St",
        "crossStreet": "at Dutch St",
        "lat": 40.71001972773535,
        "lng": -74.00701224803925,
        "distance": 728,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "111 Fulton St (at Dutch St)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d10e941735",
        "name": "Greek Restaurant",
        "pluralName": "Greek Restaurants",
        "shortName": "Greek",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/greek_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "5419c024498e81544e23eee9",
    "name": "Bareburger",
    "contact": {
        "phone": "6466570388",
        "formattedPhone": "(646) 657-0388",
        "twitter": "bareburger",
        "facebook": "159246034146605",
        "facebookUsername": "Bareburger",
        "facebookName": "Bareburger"
    },
    "location": {
        "address": "155 William Street",
        "crossStreet": "Fulton St",
        "lat": 40.710072756119395,
        "lng": -74.00623072155904,
        "distance": 775,
        "postalCode": "10038",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "155 William Street (Fulton St)",
            "New York, NY 10038",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d16c941735",
        "name": "Burger Joint",
        "pluralName": "Burger Joints",
        "shortName": "Burgers",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4c7be9be2d3ba143136795d0",
    "name": "Pret A Manger",
    "contact": {
        "phone": "2126931375",
        "formattedPhone": "(212) 693-1375",
        "twitter": "pret"
    },
    "location": {
        "address": "179 Broadway",
        "crossStreet": "at John St.",
        "lat": 40.71003802625246,
        "lng": -74.00982856750488,
        "distance": 612,
        "postalCode": "10007",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "179 Broadway (at John St.)",
            "New York, NY 10007",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1c5941735",
        "name": "Sandwich Place",
        "pluralName": "Sandwich Places",
        "shortName": "Sandwiches",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/deli_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "4a15a2e8f964a520a9781fe3",
    "name": "Mad Dog & Beans Mexican Cantina",
    "contact": {
        "phone": "2122691177",
        "formattedPhone": "(212) 269-1177",
        "twitter": "maddogandbeans"
    },
    "location": {
        "address": "83 Pearl St",
        "crossStreet": "at Stone St",
        "lat": 40.70428723922974,
        "lng": -74.01012135152561,
        "distance": 201,
        "postalCode": "10004",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "83 Pearl St (at Stone St)",
            "New York, NY 10004",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1c1941735",
        "name": "Mexican Restaurant",
        "pluralName": "Mexican Restaurants",
        "shortName": "Mexican",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
            "suffix": ".png"
        },
        "primary": true
    }]
}, {
    "id": "52e2f72a498e1de9bce745b0",
    "name": "El Vez",
    "contact": {
        "phone": "2122332500",
        "formattedPhone": "(212) 233-2500",
        "twitter": "elveznyc"
    },
    "location": {
        "address": "259 Vesey St",
        "crossStreet": "North End Avenue",
        "lat": 40.71459826656376,
        "lng": -74.01583671569824,
        "distance": 1119,
        "postalCode": "10282",
        "cc": "US",
        "city": "New York",
        "state": "NY",
        "country": "United States",
        "formattedAddress": [
            "259 Vesey St (North End Avenue)",
            "New York, NY 10282",
            "United States"
        ]
    },
    "categories": [{
        "id": "4bf58dd8d48988d1c1941735",
        "name": "Mexican Restaurant",
        "pluralName": "Mexican Restaurants",
        "shortName": "Mexican",
        "icon": {
            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
            "suffix": ".png"
        },
        "primary": true
    }]
}];

var Recommendations = function() {
    this.recommend = function(x, y, choices) {
        return Promise.resolve(mock_data);
    };
};

module.exports = Recommendations;
