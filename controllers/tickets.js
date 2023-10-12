const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addTicket,
    new: newTicket,
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: 'Add Ticket', flight});
}

async function addTicket(req, res) {
    

}