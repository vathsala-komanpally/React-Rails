import React from 'react';
import Table from 'react-bootstrap/Table'

const PrintMenuList=(props)=> {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Item Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.menu.map((itemsdetails) => {
                    return <tr key={itemsdetails.id}>
                        <td>{itemsdetails.id}</td>
                        <td>{itemsdetails.itemname}<br /><label>{itemsdetails.description}</label></td>
                        <td>${itemsdetails.price}</td>
                    </tr>
                })}
            </tbody>
        </Table>

    )
}

export default PrintMenuList
