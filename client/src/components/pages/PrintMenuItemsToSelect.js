import React from 'react';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';

const PrintMenuItemsToSelect=(props)=> {
    return (
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Select</th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.Menu.map((itemsdetails) => {
            return <tr key={itemsdetails.id}>
              <td><Form.Check type="checkbox" onChange={()=>{props.handleMenuItemChoosen(itemsdetails)}}></Form.Check></td>
              <td>{itemsdetails.itemname}<br /><label>{itemsdetails.description}</label></td>
              <td>${itemsdetails.price}</td>
            </tr>
          })}
        </tbody>
      </Table>

    )
}

export {PrintMenuItemsToSelect};
