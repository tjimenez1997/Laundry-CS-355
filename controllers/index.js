const express = require('express');
const router = express.Router();
const passport = require('passport');

//This allows you to create seperate route.js pages for each page.
//Example / refers to home.js

router.use(function (req, res, next) {
    res.locals.path = req.path;
    next();
});
router.use('/', require('./home'));
router.use('/api', require('./api'));
router.use('/sign-up', require('./sign-up'));
router.use(passport.authenticate('jwt', {session: false, failureRedirect: '/'}));
router.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});
router.use('/schedule', require('./schedule'));
router.use('/thank-you', require('./thank-you'));
router.use('/all-tasks', require('./all-tasks'));
router.use('/account', require('./account'));
router.use('/choose', require('./choose'));
router.use('/find-work', require('./find-work'));
router.use('/order-history', require('./order-history'));

router.use('/debug', require('./debug'));


module.exports = router;