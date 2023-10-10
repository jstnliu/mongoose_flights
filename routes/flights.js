var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

//localhost:3000/flights
//all flights index page
router.get('/', flightsCtrl.index);

//localhost:3000/flights/new
router.get('/new', flightsCtrl.new);

//localhost:3000/flights
//create new flights
router.post('/', flightsCtrl.create);

module.exports = router;
