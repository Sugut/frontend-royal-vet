import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function VetCard({vet, appointments}) {

    function getTime(appointment) {

        const time = appointment.time.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = ''
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour;
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour === 0) {
            timeValue= "12";
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M."; 

        return standardTime + dayNight

    }

    const vetAppointments = appointments.filter((appointment) => {
       return appointment.veterinarian_id === vet.id
    })
    
    const renderAppointments = vetAppointments.map((appointment) => {
        const patient = appointment.patient
        console.log(appointment.patient)
        return patient ? (
            <div key={appointment.id}>
                <ul>
                    <b>Patient: {patient.name}</b>
                    <p>Date: {appointment.date}</p>
                    <p>Time: {getTime(appointment)}</p>
                </ul>
            </div>
        ) : undefined ;
    })
    

    return (
        <div className='vet-card'>
            <Card>
                <Card.Body>
                    <Card.Title>{vet.name}</Card.Title>
                    <Card.Text>{vet.phone_number}</Card.Text>
                    <Accordion>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Appointments</Accordion.Header>
                            <Accordion.Body>
                                <ul>{renderAppointments}</ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
        </Card>
    </div>
    );
}

export default VetCard;




