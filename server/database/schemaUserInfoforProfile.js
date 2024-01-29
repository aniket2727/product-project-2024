const mongoose = require('mongoose');

const userprofileinfoschema = new mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    userName:{
      type:String,
      require:true
    }, 
    birthdate: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profileimage: {
        type: String,
        required: true
    },
    aboutinfo: {
        type: String,
        required: true
    }
});

const userprofileinfo = mongoose.model('userprofiledata', userprofileinfoschema);

module.exports = userprofileinfo;
