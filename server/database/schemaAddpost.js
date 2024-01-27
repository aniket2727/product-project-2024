const mongoose = require('mongoose');

const addPostSchema = new mongoose.Schema({
    
    email:{
    type:String,
    require:true
    },
    
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
