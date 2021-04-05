import React, { useState } from "react";
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

const BookNow = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Form>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" style={{ backgroundColor: 'cadetblue' }}>
            Select Date of Dine-in!
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body> <Calendar onChange={onChange} value={value} /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" style={{ backgroundColor: 'cadetblue' }}>
            Number Of people!
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body> <Form.Label>How many people are comming?</Form.Label><br />
              <Button variant="outline-info">+</Button>
              <Form.Label>0</Form.Label>
              <Button variant="outline-info">-</Button></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2" style={{ backgroundColor: 'cadetblue' }}>
            Choose services!
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body><Form.Label>Which services are you booking for?</Form.Label><br />
              <Form.Check inline label="Lunch" />
              <Form.Check inline label="Dinner" /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3" style={{ backgroundColor: 'cadetblue' }}>
            Select time!
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Button variant="light">12:15</Button>
              <Button variant="light">12:45</Button>
              <Button variant="light">1:00</Button>
              <Button variant="light">1:15</Button>
              <Button variant="light">1:30</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Button variant="info">Next</Button>
    </Form>
  );
}

export { BookNow };