import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";
// import Patients from './Patients';


function PatientCard({patient}) {
   
    return (
        <div className="item"> 
            <Card >
                <Card.Body>
                <Card.Title >{patient.name}</Card.Title>
                <Card.Text> Animal Type: {patient.animal_type}
                </Card.Text>
                {/* <Link to={`/allpatients/${patient.id}`}> */}
                {/* <Button variant="primary">Details</Button > */}
                {/* </Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}


export default PatientCard;