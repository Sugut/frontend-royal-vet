import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function PatientCard({patient, setPatients}) {

    function handleDelete() {
        fetch(`http://localhost:9292/patients/${patient.id}`, {
            method: "DELETE",
        })
        .then(r =>r.json())
        .then(()=> {
            setPatients(patient)
        });
    }
    return (
        <div className="item"> 
            <Card >
                <Card.Body>
                <Card.Title >{patient.name}</Card.Title>
                <Card.Text> Animal Type: {patient.animal_type}
                </Card.Text>
                <Button variant="primary"  onClick={handleDelete} >Delete</Button >
                </Card.Body>
            </Card>
        </div>
    );
}


export default PatientCard;