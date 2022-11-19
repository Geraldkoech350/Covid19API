import React, { useEffect } from 'react'
import Chart from './Chart'

import { getStatisticsData } from '../../Services/StatisticService'


export default function Main() {
    const [State, setState] = React.useState([])
    useEffect(() => {
        getStatisticsData().then(res => {
            setState(res)
            console.log(res);
        })
    }, [])

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Chart state={State} />
        </div>
    )
}
