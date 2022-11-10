import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function PatientDetails({allpatients, appointments, onPatientDelete}) {

    const params = useParams();
    const patient = allpatients.find((patient) => patient.id === params.id);
    const navigate = useNavigate();

    function getTime(appointment) {

        const time = appointment.time.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = '';
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour === 0) {
            timeValue= "12" 
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M.";

        return standardTime + dayNight;

    }

    const patientAppointments = appointments.filter((appointment) => {
        return appointment.patient_id === patient.id
     })

    const renderAppointments = patient && patientAppointments.length > 0 ? patient.appointments.map((appointment) => {
        return (
            <div key={appointment.id} >
                 <p>Date: {appointment.date}</p>
                 <p>Time: {getTime(appointment)}</p>
            </div>
        );
    }) : <p>No appointments available</p>

    function handleDelete() {
        fetch(`http://localhost:9292/patients/${patient.id}`, {
            method: "DELETE",
        })
        .then(r =>r.json())
        .then(()=> {
            onPatientDelete(patient)
            navigate("/allpatients")
        });
    }

    return patient ? (
        <div className="container" key={patient.id}>
            <Card className="detail-card" style={{ width: '30rem'}}>
                <h1 style={{textAlign: "center"}}>{patient.name}</h1>
                <ListGroup variant="list-group-flush">
                    <ListGroup.Item>Animal type: {patient.animal_type}</ListGroup.Item>
                    <ListGroup.Item>Breed: {patient.breed}</ListGroup.Item>
                    <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
                    <ListGroup.Item>Weight: {patient.weight}</ListGroup.Item>
                    <ListGroup.Item>Sex: {patient.sex}</ListGroup.Item>
                    <ListGroup.Item>
                        Upcoming appointment:
                        {renderAppointments} 
                    </ListGroup.Item>
                </ListGroup>
                <div className="button-div">
                    <Button className="button" onClick={handleDelete}>Delete Patient</Button>
                     <Link to={`/editpatient/${patient.id}`}>
                        <Button className="button">Edit Patient Info</Button>
                    </Link>
                </div>
            </Card>
        </div>
    ) : undefined;
}

export default PatientDetails;