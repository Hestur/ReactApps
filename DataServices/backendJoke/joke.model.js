const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Joke = new Schema({
    joke_Heading: {
        type: String
    },
    joke_Content: {
        type: String
    },
    joke_Stars: {
        type: String
    },
    joke_Date: {
        type: String
    },
    joke_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Joke', Joke);