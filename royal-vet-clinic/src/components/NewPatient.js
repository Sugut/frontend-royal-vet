import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPatient({onAddNewPatient}) {
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        const newPatient = {
          name: name,
          animal_type: animalType,
          age: age,
          breed: breed,
          weight: weight,
          sex: sex,
        };

        fetch("http://localhost:9292/patients",
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newPatient)
        })
        .then(r => r.json())
        .then(patient => {
           onAddNewPatient(patient)
           navigate("/allpatients")
          })
      }
    


    return (
        <div>
            <Form className="new" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New Patient</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <br></br>
                    <Form.Control type="text" placeholder="Animal Type" onChange={e => setAnimalType(e.target.value)} />
                    <br></br>
                    <Form.Control type="text" placeholder="Age" onChange={e => setAge(e.target.value)} />
                    <br></br>
                    <Form.Control type="text" placeholder="Breed" onChange={e => setBreed(e.target.value)} />
                    <br></br>
                    <Form.Control type="text" placeholder="Weight" onChange={e => setWeight(e.target.value)} />
                    <br></br>
                     <Form.Control type="text" placeholder="Sex" onChange={e => setSex(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
        </div>
    );
}
export default NewPatient;