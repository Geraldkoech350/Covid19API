import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function DashboardComponent() {
  return (
    <div className='container'>
      <div className='d-flex py-5 gap-5 align-self-center justify-content-center'>
        <Card style={{ width: '15rem',height:'10rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Comfirmed</Card.Title>
            <Card.Text>
              12000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', height: '10rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Comfirmed</Card.Title>
            <Card.Text>
              12000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', height: '10rem' }}>
          <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>Comfirmed</Card.Title>
            <Card.Text>
              12000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
