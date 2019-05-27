const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Feedback = new Schema({
    feedback_Heading: {
        type: String
    },
    feedback_Navn: {
        type: String
    },
    feedback_Comment: {
        type: String
    },
    feedback_Stars: {
        type: String
    },
    feedback_Date: {
        type: String
    },
    feedback_Mail: {
        type: String
    }
});

module.exports = mongoose.model('feedback', Feedback);