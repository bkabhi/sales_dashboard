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

const monthData = [
    {
        name: "Nov 1",
        uv: 30,
        pv: 24,
        amt: 24
    },
    {
        name: "Nov 4",
        uv: 15,
        pv: 13,
        amt: 22
    },
    {
        name: "Nov 8",
        uv: 25,
        pv: 98,
        amt: 22
    },
    {
        name: "Nov 12",
        uv: 10,
        pv: 39,
        amt: 20
    },
    {
        name: "Nov 16",
        uv: 40,
        pv: 48,
        amt: 21
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


module.exports = {
    dayData, monthData, transactionsData
}