const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({})
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

async function create(req, res) {
    // console.log(req.body);
    await Flight.create(req.body);
    //redirect to movies index
    res.redirect('/flights');
}

//.show 
async function show(req, res) {
    //specific flights page
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Details', flight})
}