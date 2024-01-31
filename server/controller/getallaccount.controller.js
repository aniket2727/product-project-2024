const express = require('express');
const router = express.Router();
const userAccounts = require('../database/schemaUserInfoforProfile');

const getallaccounts = async (req, resp) => {
    try {
        const allaccounts = await userAccounts.find();
        resp.status(200).json({ message: "allaccounts data is sent", allaccounts });
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

module.exports = getallaccounts;
