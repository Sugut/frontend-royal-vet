import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewAppointment({allpatients, vets, onAddAppointment}) {

    const [selectedVet, setSelectedVet] = useState('');
    const [selectedPatient, setSelectedPatient] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();


    function handleVetChange(e) {
         setSelectedVet(e.target.value)
    }

    function handlePatientChange(e) {
        setSelectedPatient(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const vet = vets.find((vet) => 
        vet.name === selectedVet)

        const patient= allpatients.find((patient) => 
            patient.name === selectedPatient
        )
    
        const new_appointment = {
            veterinarian_id: vet.id,
            patient_id: patient.id,
            date: date,
            time: time,
          };
  
          fetch("http://localhost:9292/appointments",
          {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify(new_appointment)
          })
          .then(r => r.json())
          .then(appointment => {
                onAddAppointment(appointment)
                navigate("/vets")
            })
    }

    return (

        <Form className="new" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>New Appointment</Form.Label>
          <Form.Select aria-label="Default select example" value={selectedVet} onChange={handleVetChange}>
                <option disabled={true} value="">
                        Choose Veterinarian
                </option>
                {vets.map((vet) => <option key={vet.id}>{vet.name}</option>) }
            </Form.Select>
            <br></br>
            <Form.Select aria-label="Default select example" value={selectedPatient} onChange={handlePatientChange}>
                <option disabled={true} value="">
                        Choose Patient
                </option>
                {allpatients.map((patient) => <option key={patient.id}>{patient.name}</option>) }
            </Form.Select>
            <br></br>
            <Form.Control type="text" placeholder="Date" onChange={e => setDate(e.target.value)} />
            <br></br>
            <Form.Control type="text" placeholder="Time" onChange={e => setTime(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}

export default NewAppointment;