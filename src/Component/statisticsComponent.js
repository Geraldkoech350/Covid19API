import React, { useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { getCountries, getStatisticsData } from '../Services/StatisticService';

export default function StatisticsComponent({ darkMode }) {
  const [countries, setCountries] = React.useState([]);
  const [statistics, setstatistics] = React.useState([])

  useEffect(() => {
    getCountries().then(res => {
      setCountries([...res])
    })
    getStatisticsData().then(res => {
      setstatistics([...res])
    })
  }, [])

  const dark = () => {
    if (darkMode) return "dark"
    return "light"
  }
  return (
    <div className={(darkMode ? "bg-dark text-light" : "bg-light text-dark") + "container p-3"}>
      <div className='d-flex justify-content-between align-items-center py-3'>
        <div className=''>
          <select className='form-select pl-2'>
            <option selected>ALl countries</option>
            {
              countries.map(country => {
                return <option value={country}>{country}</option>
              })
            }
          </select>
        </div>
        <div>
          <div class="input-group pr-2 ">

            <input type="text" className={(darkMode ? "bg-dark text-light form-control" : "bg-light text-dark form-control")} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <input type="button" value="Search" class="btn btn-default" id="Search" />
          </div>
        </div>

      </div>
      <Table striped bordered hover variant={dark()}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}


