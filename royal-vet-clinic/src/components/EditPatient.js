import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPatient({allpatients, onEditPatient}) {

    const params = useParams();
    const patient = allpatients.find((patient) => patient.id === params.id);
    const navigate = useNavigate();
   
    const [name, setName] = useState(patient.name)
    const [animalType, setAnimalType] = useState(patient.animal_type);
    const [age, setAge] = useState(patient.age);
    const [breed, setBreed] = useState(patient.breed);
    const [weight, setWeight] = useState(patient.weight);
    const [sex, setSex] = useState(patient.sex);

    function handleSubmitChanges(e){
        e.preventDefault()
        const editedPatient = {
          name: name,
          animal_type: animalType,
          age: age,
          breed: breed,
          weight: weight,
          sex: sex,
          id: patient.id
        }

        fetch(`http://localhost:9292/patients/${editedPatient.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editedPatient)
        })
        .then(r => r.json())
        .then(editedPatient => {
            console.log(editedPatient)
           onEditPatient(editedPatient)
           navigate(`/allpatients/${editedPatient.id}`)
          });
    }


    return patient ? (
        <div>
            <Form className="edit-patient" onSubmit={handleSubmitChanges}> 
              <Form.Group className="mb-3" >
                <Form.Label  className="text-center" style={{width: "100%", color: "black"}}>Edit Patient</Form.Label>
                <br></br>
                <p>Name:</p>
                <Form.Control type="text" defaultValue={name}  onChange={e => setName(e.target.value)}/>
                <br></br>
                <p>Animal Type:</p>
                <Form.Control type="text" defaultValue={animalType} onChange={e => setAnimalType(e.target.value)} />
                <br></br>
                <p>Age:</p>
                <Form.Control type="text" defaultValue={age} onChange={e => setAge(e.target.value)} />
                <br></br>
                <p>Breed:</p>
                <Form.Control type="text" defaultValue={breed} onChange={e => setBreed(e.target.value)} />
                <br></br>
                <p>Weight:</p>
                <Form.Control type="text" defaultValue={weight} onChange={e => setWeight(e.target.value)} />
                <br></br>
                <p>Sex:</p>
                <Form.Control type="text" defaultValue={sex} onChange={e => setSex(e.target.value)} />
              </Form.Group>
              <div className='button'>
                <Button variant="primary" type="submit">
                  Submit Changes
                </Button>
              </div>
            </Form>
        </div>
    ) : undefined
}

export default EditPatient;