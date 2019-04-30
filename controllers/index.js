const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.get('/', function(req, res){
	res.render('home');
});

module.exports = router;
