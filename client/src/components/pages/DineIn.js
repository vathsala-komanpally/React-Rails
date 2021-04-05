import React from 'react';
import Form from 'react-bootstrap/Form'

const DineIn = () => {
  let myCurrentTime= new Date().toLocaleString();
  return (
    <Form style={{width:800, height:400}}>
  <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
    <Form.Label>Availabel table's for today on {myCurrentTime}:</Form.Label>
    <Form.Control as="select" htmlSize={3} custom>
      <option>Table 1</option>
      <option>Table 3</option>
      <option>Table 4</option>
      <option>Table 9</option>
    </Form.Control>
  </Form.Group>
      <Form.Check type="checkbox" label="Check me out" />
      <Form.Label>Please choose a Menu Items(display them in a table with choose button)</Form.Label>
    </Form>
  )
}

export { DineIn };