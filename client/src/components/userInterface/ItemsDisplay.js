import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import {ButtonCart} from "./ButtonCart";
//write other functon for button then export that to navbar
const ItemsDisplay = (props) => {
    const params=useParams();
    const [itemsList, setItemsList] = useState([]);
  console.log(params);

    useEffect(()=>{
        fetch(`http://localhost:9000/api/groceryItems/category/${params.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }).then((response) => {
            return response.json();
          }).then((items) => {
            setItemsList(items);
          });
    },[]);

    const handleAddToCartOnClick = (itemDetails) => {
        props.setCart([...props.cart, itemDetails]);
       // console.log("in item Details component:", cart);
        ////props.cartDetails(cart);
    }
  
    return (
        <div>
            {/* <ButtonCart cart={cart}/> */}
             <CardGroup >
            {itemsList.map((itemDetails) => ( 
                <CardGroup key={itemDetails._id}>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={itemDetails.image} style={{ width: 285, height: 200 }} />
                        <Card.Body>
                            <Card.Title>{itemDetails.itemname}</Card.Title>
                            <Card.Text>price: {itemDetails.price}$ <br />Quantity left:{itemDetails.noOfItems}
                            </Card.Text>
                            <Button variant="info" onClick={()=>handleAddToCartOnClick(itemDetails)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
             
            ))}
            </CardGroup>
        </div>
    )
}

export { ItemsDisplay };
