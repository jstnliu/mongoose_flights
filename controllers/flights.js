const Flights = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
}

function index(req, res) {
    Flights.find({})
    .then((flights) => {
        res.render('flights/index', { flights })
    })
    .catch((err) => {
        //handle error
        console.error(err)
    })
}

function newFlight(req, res) {
    res.render('flights/new.ejs', { errorMsg: ''});
}