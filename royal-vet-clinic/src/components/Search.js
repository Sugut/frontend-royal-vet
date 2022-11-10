import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PatientCard from './PatientCard';


function Search({patients}) {

    const [selected, setSelected] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [searchedPatients, setSearchedPatients] = useState([]);

    const animalTypes = patients.map(patient => patient.animal_type);
    const uniqueAnimals = [...new Set(animalTypes)];

    function handleChange(e) {
        setSelected(e.target.value)
    }

    function handleSearch(e) {
        e.preventDefault()
        setSelected('')
        setSearchedPatients('')
        setAnimalName('')

        const filteredPatients = patients.filter((patient) => {
            return patient.name.toLowerCase() === animalName.toLowerCase() || patient.animal_type === selected 
        });

        const search = filteredPatients.map((patient) => (
            <div key={patient.id}>
                <PatientCard patient={patient}/>

            </div>
        ));
        setSearchedPatients(search)

    }

    return (
        <Form className="d-grid gap-3">
            <Form.Group className="search" controlId="searchForm">
                <Form.Label>Find Patient</Form.Label>
                <Form.Control type="text" placeholder="Enter name"  onChange={e => setAnimalName(e.target.value)} />
                <br></br>
                <Form.Select aria-label="Default select example" value={selected} onChange={handleChange}>
                    <option disabled={true} value="">
                        Choose Animal Type
                    </option>
                    {uniqueAnimals.map((animal) => <option key={animal}>{animal}</option>) }
                </Form.Select>
                <div id="search-div"></div>
                     <Button variant="primary" type="search" onClick={handleSearch}>
                        Search
                    </Button >
            </Form.Group>
            <div id="searched-group">
                <Container>
                    <Row className="justify-content-md-center">
                        <CardGroup style={{display: 'flex', flexDirection: 'row'}}>{searchedPatients}</CardGroup>
                    </Row>
                </Container>
            </div>
    </Form>
    );
};

export default Search;

