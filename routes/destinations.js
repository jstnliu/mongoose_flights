const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations')

//all routes start with '/' (root) 
//POST /flights/:id .create
router.post('/flights/:id', destinationsCtrl.create)

module.exports = router