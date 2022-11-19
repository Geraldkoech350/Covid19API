import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { getStatisticsData } from '../Services/StatisticService';
import "../App.css"

export default function DashboardComponent({ darkMode }) {
  const [Comfirmed, setComfirmed] = useState(0)
  const [Active, setActive] = useState(0)
  const [Critical, setCritical] = useState(0)
  const [Deaths, setDeaths] = useState(0)
  const [Recovered, setRecovered] = useState(0)
  const [Tests, setTests] = useState(0)
  const [state, setstate] = useState([])
  useEffect(() => {
    getStatisticsData().then(res => {
      setstate(res);
    })
    state.map(item => {
      if (item.cases.active !== null) {
        setActive(Active + item.cases.active)
      }
      if (item.cases.critical !== null) {
        setCritical(Critical + item.cases.critical)
      }
      if (item.deaths.total !== null) {
        setDeaths(Deaths + item.deaths.total)
      }
      if (item.cases.recovered !== null) {
        setRecovered(Recovered + item.cases.recovered)
      }
      if (item.tests.total !== null) {
        setTests(Tests + item.tests.total)
      }
    })
    setComfirmed(Active + Critical + Deaths + Recovered + Tests)

  }, [])


  return (
    <div className='container'>
      <div className={(darkMode ? "bg-dark text-light grid py-5 gap-5 align-self-center justify-content-center" :"bg-light text-dark grid py-5 gap-5 align-self-center justify-content-center")+""}>
        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Comfirmed</Card.Title>
            <Card.Text>
              {Comfirmed}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Active</Card.Title>
            <Card.Text>
              {Active}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Critical</Card.Title>
            <Card.Text>
              {Critical}
            </Card.Text>
          </Card.Body>
        </Card>


        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {Recovered}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {Deaths}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', height: '10rem' }}
          bg={!darkMode ? "dark" : "light"}
          text={darkMode ? "dark" : "light"}
        >
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Tests</Card.Title>
            <Card.Text>
              {Tests}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}
