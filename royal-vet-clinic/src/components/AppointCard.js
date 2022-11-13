import React from 'react'
import Card from 'react-bootstrap/Card'


function AppointCard({appointment,allpatient,vets}) {
    console.log(appointment)
  return (
    <div>
         <Card >
                <Card.Body>
                <Card.Title >{vets.name}</Card.Title>
                <Card.Text> {allpatient.name}</Card.Text>
                <Card.Text> {appointment.date}</Card.Text>
                <Card.Text> {appointment.time}</Card.Text>
                </Card.Body>
         </Card>
    </div>
  )
}

export default AppointCard