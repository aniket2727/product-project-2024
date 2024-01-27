const express = require('express');
const router = express.Router();
const userprofileinfo = require('../database/schemaUserInfoforProfile');

const adduserprofile = async (req, resp) => {
    const { email,birthdate, gender, profileimage, aboutinfo } = req.body;

    try {
        const userprofileinfoInstance = new userprofileinfo({
            email,
            birthdate,
            gender,
            profileimage,
            aboutinfo
        });

        const result = await userprofileinfoInstance.save();

        resp.status(201).json({ message: "Data saved successfully", result });
    } catch (error) {
        resp.status(401).json({ message: "Error in saving data", error });
    }
};

module.exports = adduserprofile;
