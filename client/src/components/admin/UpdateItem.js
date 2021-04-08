import React, { useState, useEffect } from 'react'
import { ListOfItems } from "./ListOfItems";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {PrintUserMessage} from './PrintUserMessage';

const UpdateItem = () => {
    const [selectedItem, setSelectedItem] = useState({
        id: '',
        itemname: '',
        price: '',
        noOfItems: '',
        image: '',
        categoryName: ''
    });
    const [items, setItems] = useState([]);
    const [userMessage, setUserMessage]=useState('');

    useEffect(() => {
        GETDataOfItems();
    }, []);


    const GETDataOfItems = () => {
        fetch('/api/items/', {
            headers: {
                'token': window.localStorage.getItem('token')
              }
        }).then((response) => response.json())
            .then((groceryItems) => {
                setItems(groceryItems);
            })
    }

    const handleClickItems = (itemName) => {
        if (itemName === "Select") {
            return;
        }
        const foundItem = items.find((element) => {
            return element.itemname === itemName;
        });

        setSelectedItem(foundItem);
        console.log(selectedItem);
    }

    const handleChange = (e) => {
        const newItemState = { ...selectedItem, [e.target.name]: e.target.value };
        setSelectedItem(newItemState);
    }

    const handleUpdateItemSubmit = () => {
        console.log("selectedItemin uPdate", selectedItem)
        fetch(`/api/items/${selectedItem.id}`, {
            method: "PATCH",
            headers: {
                'token': window.localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedItem),
        }).then((response) => {
            console.log("responses", response.status);
            setUserMessage(response.status);
        })
    }


    return (
        <div className="updateItem">
            <Jumbotron><Form>
                <h1>Update items</h1>
                <ListOfItems groceryItems={items} handleClick={handleClickItems} />

                <Form.Group controlId="ItemName">
                    <Form.Label>Selected item name:</Form.Label>
                    <Form.Control type="text" name="itemname" value={selectedItem.itemname} onChange={handleChange} placeholder=" a name of the item to add" />
                </Form.Group>

                <Form.Group controlId="ItemPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" name="price" value={selectedItem.price} onChange={handleChange} placeholder="Enter a price of item" />
                </Form.Group>

                <Form.Group controlId="no.OfItems">
                    <Form.Label>Number of Items:</Form.Label>
                    <Form.Control type="text" name="noOfItems" value={selectedItem.noOfItems} onChange={handleChange} placeholder="Enter no. of items" />
                </Form.Group>

                <Form.Group controlId="imageOfItem">
                    <Form.Label>image Url:</Form.Label>
                    <Form.Control type="text" name="image" value={selectedItem.image} onChange={handleChange} placeholder="Paste Url link here" />
                </Form.Group>


                <Button variant="info" type="submit" onClick={handleUpdateItemSubmit} className="btn btn-primary">Update Item</Button>
                {userMessage===200&&
                    <PrintUserMessage header={"Update Item"} message={"Item Updated Successfully"}/>
                }
            
            </Form></Jumbotron>
        </div>

    )
}

export { UpdateItem };

