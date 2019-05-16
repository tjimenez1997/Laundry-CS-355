const express = require('express');
const router = express.Router();
const passport = require('passport');

//This allows you to create seperate route.js pages for each page.
//Example / refers to home.js

router.use('/', require('./home'));
router.use('/sign-up', require('./sign-up'));
router.use('/schedule', passport.authenticate('jwt', {session: false}), require('./schedule'));
router.use('/all-tasks', passport.authenticate('jwt', {session: false}), require('./all-tasks'));
router.use('/account', passport.authenticate('jwt', {session: false}), require('./account'));
router.use('/choose', passport.authenticate('jwt', {session: false}), require('./choose'));
router.use('/find-work', passport.authenticate('jwt', {session: false}), require('./find-work'));
router.use('/order-history', passport.authenticate('jwt', {session: false}), require('./order-history'));

router.use('/debug', require('./debug'));


module.exports = router;