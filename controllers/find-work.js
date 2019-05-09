const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('find-work');
});
  
  
module.exports = router;