const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addTicket,
};

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight: flight._id});
    res.render('tickets/new', { title: 'Add Ticket', flight, ticket});
}

async function create(req, res) {
    req.body.flight = req.params.id
    try {
        await Ticket.create(req.body);

    } catch(err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`)
}

async function addTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const createdTicket = new Ticket(req.body);
    createdTicket.flight = flight;
    await createdTicket.save();
    res.redirect(`/flights/${flight._id}`)
}