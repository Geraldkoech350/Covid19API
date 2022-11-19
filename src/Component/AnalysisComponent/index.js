import React, { useEffect, useState } from 'react'
import Chart from './Chart'

import { getHistoryData, getCountries } from '../../Services/StatisticService'

export default function Main() {
    const [State, setState] = React.useState([])
    const [Data, setData] = useState([])
    const [countries, setCountries] = React.useState([]);
    const [country, setcountry] = useState("Kenya")

    useEffect(() => {

        getHistoryData(country).then(res => {
            setData([...res])
            // cases, deaths and tests Date
        })
        getCountries().then(res => {
            setCountries([...res])
        })

        console.log(Data);
        setState([...Data.map(item => {
            return { cases: item.cases.total, deaths: item.deaths.total, tests: item.tests.total, Date: item.day }
        })])
        console.log(State);
    }, [])

    const HandleFilterByCountry = (event) => {
        const country = event.target.value;
        setcountry(country)
        getHistoryData(country).then(res => {
            setData([...res])
        })
        setState([...Data.map(item => {
            return { cases: item.cases.total, deaths: item.deaths.total, tests: item.tests.total, Date: item.day }
        })])
    }

    return (
        <div className='container'>
            <div className='w-100 d-flex align-item-center justify-content-center'>
                <label><u>Line Graph For country {country.toUpperCase()}</u></label>
            </div>
            <div className=' pl-4 col-3'>
                <select onChange={HandleFilterByCountry} className='form-select pl-4'>
                    <option selected>ALl countries</option>
                    {
                        countries.map(country => {
                            return <option key={country} value={country}>{country}</option>
                        })
                    }
                </select>
            </div>
            <div className='d-flex p-4 justify-content-center align-items-center'>

                <Chart state={State} />
            </div>
        </div>
    )
}
