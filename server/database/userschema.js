const mongoose = require('mongoose');  // imported mongoose for database connections 


// schema for module
const userinfoschema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },

    name: {
        type: String,
        unique: true
    },

    pass: {
        type: String
    }
});

const usermodel = mongoose.model('User', userinfoschema);
module.exports = usermodel;
