import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Patients from "./components/Patients";
import Home from "./components/Home";
import PatientDetails from "./components/PatientDetails";
import NewPatient from "./components/NewPatient";
import EditPatient from "./components/EditPatient";
import Vets from "./components/Vets";
import NewAppointment from "./components/NewAppointment";




function App() {

  const [patients, setPatients] = useState([]);
  const [vets, setVets] = useState([]);
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(r => r.json())
    .then(patients => setPatients(patients))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/veterinarians")
    .then(r => r.json())
    .then(vets => setVets(vets))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
    .then(r => r.json())
    .then(appointments => setAppointments(appointments))
  }, []);

  function addPatient(newPatient){
    setPatients([...patients,newPatient])
  };

  function deletePatient(deletedPatient){
    const updatedPatients = patients.filter(patient => patient.id !== deletedPatient.id)
    setPatients(updatedPatients)
  };

  function handleEdit(editedPatient){
    const unchangedPatients = patients.filter(patient => patient.id !== editedPatient.id)
    setPatients([unchangedPatients,editedPatient])
  };

  function addAppointment(newAppointment) {
    setAppointments([...appointments,newAppointment])
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/vets" element={<Vets vets={vets} appointments={appointments}/>} />
        <Route path="/allpatients" element={<Patients allpatients={patients}/>} />
        <Route path="/allpatients/:id" element={<PatientDetails allpatients={patients} appointments={appointments} onPatientDelete={deletePatient}/>} />
        <Route path="/newpatient" element={<NewPatient onAddNewPatient={addPatient} />} />
        <Route path="/editpatient/:id" element={<EditPatient allpatients={patients} onEditPatient={handleEdit}/>} />
        <Route path="/newappointment" element={<NewAppointment allpatients={patients} vets={vets} onAddAppointment={addAppointment}/>} />
        <Route path="/" element ={<Home allpatients={patients}/>} />
      </Routes>
    </div>
  );
};

export default App;