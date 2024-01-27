const express = require('express');
const getuserpost = require('../database/schemaAddpost');
const router = express.Router();

const getpost = async (req, resp) => {
    const {email} = req.body; 
    try {
        const getpostresult = await getuserpost.find({ email: email });
        if (getpostresult && getpostresult.length > 0) {
            resp.status(200).json({ "all posts of user are": getpostresult });
        } else {
            resp.status(404).json({ message: "No posts available for the user", getpostresult });
        }
    } catch (error) {
        resp.status(500).json({ message: "Internal Server Error", error });
    }
};
module.exports=getpost;
