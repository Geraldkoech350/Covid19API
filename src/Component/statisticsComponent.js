import React, { useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { getCountries, getStatisticsData, getHistoryData, getHistoryDataCoutryDate } from '../Services/StatisticService';

export default function StatisticsComponent({ darkMode }) {
  const [countries, setCountries] = React.useState([]);
  const [statistics, setStatistics] = React.useState([])
  const [statisticsV, setStatisticsV] = React.useState([])
  const [Search, setSearch] = React.useState('')

  useEffect(() => {
    getStatisticsData().then(res => {
      setStatistics([...res])
      setStatisticsV([...res])
    })
    getCountries().then(res => {

      setCountries([...res])
    })
    setStatisticsV([...statistics])

  }, [])

  const HandleSubmitSearch = (e) => {
    e.preventDefault()
    getHistoryData(Search).then(res => {
      setStatisticsV([...res])
      console.log(res);
    })

  }

  const HandleFilterByCountry = (event) => {
    const country = event.target.value;
    getHistoryData(country).then(res => {
      setStatisticsV([...res])
      console.log(res);
    })
  }
  const HandleSearch = (e) => {
    const search = e.target.value;
    setSearch(search)
  }
  const dark = () => {
    if (darkMode) return "dark"
    return "light"
  }
  return (
    <div className={(darkMode ? "bg-dark text-light" : "bg-light text-dark") + "container p-3"}>
      <div className='d-flex justify-content-between align-items-center py-3'>
        <div className=''>
          <select onChange={HandleFilterByCountry} className='form-select pl-2'>
            <option selected>ALl countries</option>
            {
              countries.map(country => {
                return <option key={country} value={country}>{country}</option>
              })
            }
          </select>
        </div>
        <div>
          <div class="input-group pr-2 ">

            <input type="text" onChange={HandleSearch} className={(darkMode ? "bg-dark text-light form-control" : "bg-light text-dark form-control")} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <input type="button" onClick={HandleSubmitSearch} value="Search" class="btn btn-default" id="Search" />
          </div>
        </div>

      </div>
      <Table striped bordered hover variant={dark()}>
        <thead>
          <tr>
            <th>#</th>
            <th>continent</th>
            <th>country</th>
            <th>population</th>
            <th>Active cases</th>
            <th>critical</th>
            <th>recovered</th>
            <th>Deaths</th>
            <th>Tests</th>
            <th>Date</th>

          </tr>
        </thead>
        <tbody>
          {
            statisticsV.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.continent}</td>
                  <td>{item.country}</td>
                  <td>{item.population}</td>
                  <td>{item.cases.active}</td>
                  <td>{item.cases.critical}</td>
                  <td>{item.cases.recovered}</td>
                  <td>{item.deaths.total}</td>
                  <td>{item.tests.total}</td>
                  <td>{item.time}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}


