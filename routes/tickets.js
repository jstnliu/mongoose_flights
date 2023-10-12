const express = require('express');
const router = express.Router();
ticketsCtrl = require('../controllers/tickets')

//GET /flights/:id/ticket/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

//POST /flights/:id/tickets

module.exports = router;