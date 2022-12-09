import * as React from 'react';
import {  XAxis } from 'recharts';
import { AreaChart, Area, Tooltip } from "recharts";

// Generate Sales Data

export default function Smallchart() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getChartData()
    }, [])
    const getChartData = () => {
        fetch('https://salesdashboardapi.onrender.com/month')
            .then(res => res.json())
            .then(res =>{
                setData(res)
                // console.log(res, " chart data")
            })
    }

    return (
        <div>
            {/* <ResponsiveContainer> */}
            <AreaChart
            type = 'LineChart'
                width={240}
                height={142}
                data={data}
                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000AFF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#000AFF" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis axisLine={false} tickLine={false} dataKey="name" style={{fontSize:'10px', fontWeight:'800'}} stroke= '#BCBCBC'   />
                {/* <YAxis axisLine={false} tickLine={false} /> */}
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#000AFF"
                    fillOpacity={1}
                    strokeWidth={3}
                    fill="url(#colorUv)"
                />
            </AreaChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
}