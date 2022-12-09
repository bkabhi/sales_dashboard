const express = require("express");
const cors = require("cors");
const router = require('./router/allRoute.js')

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, function () {
    console.log(`server is running at http://localhost:${PORT}`);
});