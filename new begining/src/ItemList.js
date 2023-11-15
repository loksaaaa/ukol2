// ItemList.js

import React, { useState } from 'react';
import ShoppingItems from './ShoppingItems';
import Item from './Item';
import './ItemList.css'; // Import the CSS file if needed

const ItemList = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (itemName) => {
        // Generate a unique id for the new item
        const newItemId = items.length + 1;
        // Create a new item object
        const newItem = { id: newItemId, details: itemName };
        // Update the state to include the new item
        setItems([...items, newItem]);
    };

    const handleRemoveItem = (itemId) => {
        // Filter out the item with the specified id
        const updatedItems = items.filter(item => item.id !== itemId);
        // Update the state to remove the item
        setItems(updatedItems);
    };

    return (
        <div className="item-list-container">
            <h3></h3>
            {/* ShoppingItems component */}
            <ShoppingItems onAddItem={handleAddItem} />
            {/* Display Item components outside of ShoppingItems */}
            {items.map(item => (
                <Item key={item.id} itemName={item.details} onRemove={() => handleRemoveItem(item.id)} />
            ))}
            {/* Additional content or functionality specific to ItemList */}
        </div>
    );
}

export default ItemList;
