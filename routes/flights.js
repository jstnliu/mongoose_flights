const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//localhost:3001/flights
//all flights index page
router.get('/', flightsCtrl.index);

//localhost:3001/flights/new
router.get('/new', flightsCtrl.new);

//localhost:3001/flights
//GET /flights/:id/destinations
router.get('/:id/', flightsCtrl.show )

//localhost:3001/flights
//create new flights
router.post('/', flightsCtrl.create);



module.exports = router;
