const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('thank-you');
});
  
  
module.exports = router;