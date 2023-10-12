const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addTicket,
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: 'Add Ticket', flight});
}

async function create(req, res) {
    req.body.flight = req.params.id
    try {
        await Ticket.create(req.body);
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/flight/${req.params.id}`)
}

async function addTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`)
}