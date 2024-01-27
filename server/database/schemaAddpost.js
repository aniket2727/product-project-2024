const mongoose = require('mongoose');

const addPostSchema = new mongoose.Schema({
    postimage: {
        type: String,
        required: true
    },
    
    postcaption: {
        type: String,
        required: true
    }
});

const addPost = mongoose.model('userpost', addPostSchema);

module.exports = addPost;
