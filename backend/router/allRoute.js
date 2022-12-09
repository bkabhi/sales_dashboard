const express = require("express");
const { dayData, monthData, transactionsData } = require('../config/data.js')

const router = express.Router()

// month
router.get("/month", (req, res) => {
    res.json(monthData);
});

// day
router.get("/day", (req, res) => {
    res.json(dayData);
});

// transactions
router.get("/transactions", (req, res) => {
    res.json(transactionsData);
});

module.exports = router