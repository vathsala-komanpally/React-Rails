import React,{useEffect, useState} from 'react';
import { ListOfItems } from "./ListOfItems";
import {PrintDeleteUserMessage} from './PrintDeleteUserMessage';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const DeleteItem = () => {
    const [items, setItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState({id:''});
    const [userMessage, setUserMessage]=useState('');
   

    useEffect(() => {
        GETDataOfItems();
    }, []);

    const GETDataOfItems=()=>{
        fetch('/api/items/', {
        }).then((response) => response.json())
        .then((groceryItems) => {
            setItems(groceryItems);
        })
    }

    const handleClickItems=(itemName)=>{
        if(itemName==="Select"){
            return;}
        const foundItemId = items.find((element) => {
            return element.itemname === itemName;
        });

        const ItemId = { id: foundItemId.id };
        setSelectedItemId(ItemId);
    }

    const handleDeleteItemNameSubmit=()=>{
        fetch(`/api/items/${selectedItemId.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            setUserMessage(response.status);
        })
        
    }
    return (
        <div className="deleteItem">
            <Jumbotron><Form>
            <h1>Delete</h1>
            <ListOfItems groceryItems={items} handleClick={handleClickItems}/>    
            <Button variant="info" type="submit" onClick={handleDeleteItemNameSubmit} >Delete Item</Button>
            {userMessage===200&&
                    <PrintDeleteUserMessage message={"Item deleted"}/>
                }
            </Form></Jumbotron>
        </div>
    )
}

export { DeleteItem };
