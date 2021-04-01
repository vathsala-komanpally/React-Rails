import React, { useState, useEffect } from 'react'
import { ListOfItems } from "./ListOfItems";

const UpdateItem = () => {
    const [selectedItem, setSelectedItem] = useState({id: '',
        itemname: '',
        price: '',
        noOfItems: '',
        image: '',
        categoryName:''
    });
    const [items, setItems] = useState([]);

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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedItem),
        }).then((response) => {
            console.log("responses", response);
        })
    }


    return (
        <div className="updateItem">
            <h1>Update items</h1>
            <ListOfItems groceryItems={items} handleClick={handleClickItems} />
            <div className="itemDetails">
                <div className="ItemName">
                    <label>Selected item name:
                <input name="itemname" value={selectedItem.itemname} onChange={handleChange} placeholder="Enter a name of the item to add" />
                    </label>
                </div>

                <div className="ItemPrice">
                    <label >Price:
                <input name="price" value={selectedItem.price} onChange={handleChange} placeholder="Enter a price of item" />
                    </label>
                </div>
                <div className="no.OfItems">
                    <label >Number Of Items:
                <input name="noOfItems" value={selectedItem.noOfItems} onChange={handleChange} placeholder="Enter no. of items" />
                    </label>
                </div>
                <div className="imageOfItem">
                    <label >image Url:
                <input name="image" value={selectedItem.image} onChange={handleChange} placeholder="Paste Url link here" />
                    </label>
                </div>
            </div>

            <button type="submit" onClick={handleUpdateItemSubmit} className="btn btn-primary">Update Item</button>
        </div>

    )
}

export { UpdateItem };
{/* <div className="updateItem">
<h1>Update items</h1>
<div className="displayCategories">
    <label >Choose a category:</label>
    <select name="categoryId" id="categories">
        <option value=""></option>
    </select>
</div>

<div className="updateCategoryName">
    <label >Category name:</label>
    <input className="form-control" id="categoryname" placeholder="Enter a name of category" name="categoryname" />
</div>
<div className="displayItemNames">
    <label>Choose an item:</label>
    <select className="categoryitemname" name="categoryItemName" id="categoryItems">
    </select>
</div>
<div className="updateItemName">
    <label>Name of item</label>
    <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
</div>
  <div className="updateItemName">
                <label>Name of item</label>
                <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
            </div>

            <div className="updateItemPrice">
                <label>Price</label>
                <input name="price" className="form-control" id="price" placeholder="Enter a price of item" />
            </div>
            <div className="updateNo.OfItems">
                <label>Number Of Items</label>
                <input type="text" className="form-control" id="noofitems" placeholder="Enter no. of items" name="noofitems" />
            </div>
            <fieldset className="updateReadyToEat">
                <legend className="col-form-label">Ready to Eat?</legend>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatYes" name="readyToEat" value="true" />
                    <label >Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatNo" name="readyToEat" value="false" />
                    <label>No</label>
                </div></fieldset> */}
