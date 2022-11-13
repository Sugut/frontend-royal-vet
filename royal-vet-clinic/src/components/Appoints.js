import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Appoints.css"

function Appoints() {
  return (
    <div>
        <Form className="appoint-card" style={{ width: '30rem'}}>
        <Form.Label>Upcoming Appointments</Form.Label>
        </Form>
    </div>

  )
}

export default Appoints