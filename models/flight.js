const mongoose = require('mongoose');
//shortcut for mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: [
            'Americano',
            'Southweast',
            'Poo-nited',
        ]
    },
    airport: {
        type: String,
        enum: [
            'AUS',
            'DFW',
            'DEN',
            'LAX',
            'SAN',
        ]
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
       type: Date,
       default: new Date(new Date().getFullYear()+1).getDate(),
    },
});

//compile schema and export
//'Flight' will be 'flights' in MongoDB
module.exports = mongoose.model('Flight', flightSchema);