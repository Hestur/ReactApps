
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogPost = new Schema({
    post_title: {
        type: String
    },
    post_description: {
        type: String
    },
    post_text: {
        type: String
    },
    selectedFile: {
        type: String
    }
});

module.exports = mongoose.model('BlogPost', BlogPost);