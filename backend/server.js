const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const monthData = [
    {
        name: "Nov 1",
        uv: 30,
        pv: 24,
        amt: 24
    },
    {
        name: "Nov 2",
        uv: 20,
        pv: 13,
        amt: 22
    },
    {
        name: "Nov 4",
        uv: 25,
        pv: 98,
        amt: 22
    },
    {
        name: "Nov 6",
        uv: 30,
        pv: 39,
        amt: 20
    },
    {
        name: "Nov 8",
        uv: 35,
        pv: 48,
        amt: 21
    },
    {
        name: "Nov 10",
        uv: 18,
        pv: 48,
        amt: 22
    },
    {
        name: "Nov 12",
        uv: 20,
        pv: 44,
        amt: 25
    }
    ,
    {
        name: "Nov 14",
        uv: 33,
        pv: 43,
        amt: 21
    },
    {
        name: "Nov 16",
        uv: 40,
        pv: 46,
        amt: 22
    }
];

function createData(id, date, name, img, amount) {
    return { id, date, name, img, amount };
}
const jikomobileapp = 'https://i.imgur.com/ZFAw18x.png'
const transactionsData = [
    createData(
        0,
        '16 Mar, 2019',
        'Jiko Mobile App',
        jikomobileapp,
        15,
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Jiko Mobile App',
        jikomobileapp,
        15,
    ),
    createData(
        2,
        '16 Mar, 2019',
        'Jiko Mobile App',
        jikomobileapp,
        15,
    ),
    createData(
        3,
        '16 Mar, 2019',
        'Jiko Mobile App',
        jikomobileapp,
        15,
    ),
    createData(
        4,
        '16 Mar, 2019',
        'Jiko Mobile App',
        jikomobileapp,
        15,
    )
];

// month
app.get("/month", (req, res) => {
    res.json(monthData);
});

const dayData = [
    {
        name: "S",
        uv: 30,
        pv: 20,
        amt: 30
    },
    {
        name: "M",
        uv: 30,
        pv: 20,
        amt: 25
    },
    {
        name: "T",
        uv: 30,
        pv: 20,
        amt: 20
    },
    {
        name: "W",
        uv: 30,
        pv: 20,
        amt: 15
    },
    {
        name: "T",
        uv: 30,
        pv: 20,
        amt: 10
    },
    {
        name: "F",
        uv: 30,
        pv: 20,
        amt: 5
    },
    {
        name: "S",
        uv: 30,
        pv: 20,
        amt: 0
    }
];
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