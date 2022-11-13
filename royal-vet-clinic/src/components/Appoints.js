import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Appoints.css"
import Card from 'react-bootstrap/Card';
import AppointCard from './AppointCard';


function Appoints({appointments}) {
    const appointList=appointments.map((appointment)=>{
      return <AppointCard/>
    })

  return (
    <div>
        <Form className="appoint-card" style={{ width: '30rem'}}>
        <Form.Label>Upcoming Appointments</Form.Label>
        <Card.Text>{appointments}</Card.Text>
        </Form>
    </div>

  )
}

export default Appoints