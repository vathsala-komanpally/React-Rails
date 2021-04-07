import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {PrintUserMessage} from './PrintUserMessage';

const AddItem = () => {
    const [items, setItems] = useState({
        itemname: '',
        price: '',
        noOfItems: '',
        image: '',
        categoryName: ''
    });
    const [userMessage, setUserMessage]=useState('');

    useEffect(() => {
        setItems(items);
    }, []);

    const handleChange = (e) => {
        const newItemState = { ...items, [e.target.name]: e.target.value };
        setItems(newItemState);
    }
    const handleAddItemClick = () => {
        fetch('/api/items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        }).then((response) => {
            console.log("responses", response.status);
            setUserMessage(response.status);
        })
    }

    return (
        <div className="addItem">
            <Jumbotron>
                <Form>
                    <h1>Add new items</h1>
                    <Form.Group controlId="addCategoryName">
                        <Form.Label>Enter name of category:</Form.Label>
                        <Form.Control type="text" name="categoryName" value={items.categoryName} onChange={handleChange} placeholder="Enter a name of category" />
                    </Form.Group>

                    <Form.Group controlId="ItemName">
                        <Form.Label>Name of item:</Form.Label>
                        <Form.Control type="text" name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add" />
                    </Form.Group>

                    <Form.Group controlId="ItemPrice">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item" />
                    </Form.Group>

                    <Form.Group controlId="no.OfItems">
                        <Form.Label>Number of Items:</Form.Label>
                        <Form.Control type="text" name="noOfItems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items" />
                    </Form.Group>

                    <Form.Group controlId="imageOfItem">
                        <Form.Label>image Url:</Form.Label>
                        <Form.Control type="text" name="image" value={items.image} onChange={handleChange} placeholder="Paste Url link here" />
                    </Form.Group>

                    <Button variant="info" type="submit" onClick={handleAddItemClick} className="btnAddItem">Add Item</Button>
                    {userMessage === 200 &&
                        <PrintUserMessage header={"Update Item"} message={"Item Updated Successfully"} />
                    }

                </Form>
            </Jumbotron>
        </div>
    )
}

export { AddItem };