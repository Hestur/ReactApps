const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dyr = new Schema({

    dyrenavn: {
        type: String,
        default: "Nyt ukendt dyr"
    },
    dyremad: {
        type: String,
        default: "Forskelligt"
    },
    dyretsvaegt: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model('Dyr', Dyr, 'dyr');