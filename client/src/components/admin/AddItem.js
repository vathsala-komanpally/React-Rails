import React from 'react';
import { useEffect, useState } from 'react';

const AddItem = () => {
    const [items, setItems] = useState({
        itemname: '',
        price: '',
        noOfItems: '',
        image: '',
        categoryName: ''
    });
      
    useEffect(()=>{
        setItems(items);
    },[]);

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
          }).then(data => data.json())
    }

    return (
        <div className="addItem">
            <h1>Add new items</h1>
            <div className="addCategoryName">
                <label>Enter name of category:
                <input name="categoryName" value={items.categoryName} onChange={handleChange} placeholder="Enter a name of category" />
                </label>

                <div className="ItemName">
                    <label>Name of item:
                <input name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add" />
                    </label>
                </div>

                <div className="ItemPrice">
                    <label >Price:
                <input name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item" />
                    </label>
                </div>

                <div className="no.OfItems">
                    <label >Number Of Items:
                <input name="noOfItems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items" />
                    </label>
                </div>

                <div className="imageOfItem">
                    <label >image Url:
                <input name="image" value={items.image} onChange={handleChange} placeholder="Paste Url link here" />
                    </label>
                </div>

            </div>
            <button type="submit" onClick={handleAddItemClick} className="btnAddItem">Add Item</button>
        </div>
    )
}

export { AddItem };