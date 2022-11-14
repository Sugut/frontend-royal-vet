import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Appoints.css"
import Card from 'react-bootstrap/Card';
import AppointCard from './AppointCard';


function Appoints({appointments,allpatients,vets}) {
    const appointList=appointments.map((appointment)=>{
      <div key={appointment.id} className="item">
            <AppointCard appointment={appointment}allpatients={allpatients} vets={vets}/>
        </div>
    })
    const renderVeterenians = vets.map((vet) => (
      <div key={vet.id} className="item">
          <AppointCard vet={vet} />
      </div>
  ));
  const renderAppointPatients = allpatients.map((patient) => (
    <div key={patient.id}>
        <AppointCard patient={patient}/>
    </div>
));
  
  return (
    <div>
        <Form className="appoint-card" style={{ width: '30rem'}}>
        <Form.Label>Upcoming Appointments</Form.Label>
        <Card.Text>{appointList}</Card.Text>
        <Card.Text>{renderVeterenians}</Card.Text>
        <Card.Text>{renderAppointPatients}</Card.Text>
        </Form>
    </div>

  )
}

export default Appoints