const Flight = require('../models/flight');

module.exports = {
    create,
}

 async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    //console.log(req.body)
    flight.destinations.push(req.body);
    try {
        //save changes to flights destinations
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    //response to change
    res.redirect(`/flights/${flight._id}`);
}

