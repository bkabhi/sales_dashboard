const express = require("express");
const cors = require("cors");
const { dayData, monthData, transactionsData } = require('./config/data.js')
const app = express();

app.use(express.json());
app.use(cors());


// month
app.get("/month", (req, res) => {
    res.json(monthData);
});


// day
app.get("/day", (req, res) => {
    res.json(dayData);
});

// transactions
app.get("/transactions", (req, res) => {
    res.json(transactionsData);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
});