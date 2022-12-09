import * as React from 'react';
import { XAxis, YAxis } from 'recharts';
import { AreaChart, Area, Tooltip } from "recharts";

export default function Chart() {
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
        <AreaChart
            width={400}
            height={200}
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#000AFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#000AFF" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis axisLine={false} style={{fontSize:'10px', fontWeight:'800'}} stroke= '#BCBCBC'  tickLine={false} dataKey="name" />
            <YAxis axisLine={false} style={{fontSize:'10px', fontWeight:'800'}} stroke= '#BCBCBC' tickLine={false} tickFormatter={(uv) => "$" + uv} />
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
    );
}