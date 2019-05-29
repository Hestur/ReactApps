
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Produkt = new Schema({
    produkt_navn: {
        type: String
    },
    produkt_beskrivelse: {
        type: String
    },
    produkt_pris: {
        type: String
    },
    produkt_foto: {
        type: String 
    }
});

module.exports = mongoose.model('Produkt', Produkt);