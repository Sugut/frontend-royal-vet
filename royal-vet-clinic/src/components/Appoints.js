import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Appoints.css"
import Card from 'react-bootstrap/Card';
import AppointCard from './AppointCard';


function Appoints({appointments,allpatients,vets}) {
    const appointList=appointments.map((appointment)=>{
      <div key={appointment.id} className="item">
            <AppointCard appointments={appointments}allpatients={allpatients} vets={vets}/>
        </div>
    })
  
  return (
    <div>
        <Form className="appoint-card" style={{ width: '30rem'}}>
        <Form.Label>Upcoming Appointments</Form.Label>
        <Card.Text>{appointList}</Card.Text>
        </Form>
    </div>

  )
}

export default Appoints