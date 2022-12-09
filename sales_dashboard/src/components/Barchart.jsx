import * as React from 'react';
import { XAxis, YAxis, Bar } from 'recharts';
import {
    BarChart,
    Tooltip
} from "recharts";

export default function Barchart() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getChartData()
    }, [])
    const getChartData = () => {
        fetch('https://salesdashboardapi.onrender.com/day')
            .then(res => res.json())
            .then(res =>{
                setData(res)
                // console.log(res, " chart data")
            })
    }
    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart
                    width={271}
                    height={179}
                    data={data}
                    barCategoryGap="27%"
                    margin={{
                        top: 5,
                        right: 10,
                        left: -5,
                        bottom: 5,
                    }}
                >
                    <XAxis style={{fontSize:'10px', fontWeight:'800'}} stroke= '#BCBCBC'   axisLine={false} tickLine={false}  dataKey="name" />
                    <YAxis style={{fontSize:'10px', fontWeight:'800'}} stroke= '#BCBCBC'   axisLine={false} tickLine={false}  />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#00D1FF" radius={[20,20,0,0]} />
                    <Bar dataKey="uv" fill="#0038FF" radius={[20,20,0,0]}/>
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
}