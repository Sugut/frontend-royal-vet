import React from 'react';
import PatientCard from './PatientCard';
import CardGroup from 'react-bootstrap/CardGroup';



function Patients({allpatients, setPatients}) {
   
    const renderPatients = allpatients.map((patient) => (
        <div key={patient.id}>
            <PatientCard patient={patient} setPatients={setPatients}/>
        </div>
    ));

    return (
        <div>
            <h3 className='title'>Patients</h3>
                <div className="container">
                    <CardGroup > {renderPatients} </CardGroup>
                </div>
         </div>
    );
}

export default Patients;