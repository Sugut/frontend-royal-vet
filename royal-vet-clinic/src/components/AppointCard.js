import React from 'react'
import Card from 'react-bootstrap/Card';


function AppointCard({appointment}) {
  return (
    <div>
         <Card >
                <Card.Body>
                <Card.Title >{appointment.veterinarian_id}</Card.Title>
                <Card.Text> {appointment.patient_id}</Card.Text>
                <Card.Text> {appointment.date}</Card.Text>
                <Card.Text> {appointment.time}</Card.Text>
                </Card.Body>
         </Card>
    </div>
  )
}

export default AppointCard