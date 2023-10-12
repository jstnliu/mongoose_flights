const express = require('express');
const router = express.Router();
ticketsCtrl = require('../controllers/tickets')

//GET /flights/:id/ticket/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

//POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create)

//GET /flight/:id
//previouly route.get in error(?)
router.post('/flights/:id', ticketsCtrl.addTicket)

module.exports = router;