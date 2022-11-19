import React from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";



export default function LineGraph({ state }) {
    return (
        <div className='container-fluid'>
            <LineChart
                width={1000}
                height={350}
                data={state}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Legend />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="cases" stroke="#ff0000" />
                <Line type="monotone" dataKey="deaths" stroke="#0000ff" />
                <Line type="monotone" dataKey="tests" stroke="#3cb371" />

            </LineChart>
        </div>
    )
}
