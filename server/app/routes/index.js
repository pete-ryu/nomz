'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/user', require('./members'));
router.use('/feed', require('./feed.js'));
router.use('/venue', require('./venue.js'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
