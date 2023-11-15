// ShoppingItems.js

import React from 'react';
import './ShoppingItems.css'; // Import the CSS file if needed

const ShoppingItems = ({ onAddItem }) => {
    // Your Shopping Items component logic goes here

    const handleAddItem = () => {
        const itemName = prompt('Enter the name for the new item:');
        if (itemName !== null && itemName !== '') {
            onAddItem(itemName);
        }
    };

    return (
        <div className="shopping-items-container">
            <h4>Shopping Items</h4>
            {/* Move the "Add Item" button to the right */}
            <button className="add-item-button" onClick={handleAddItem}>
                Add Item
            </button>
            {/* Additional content or functionality specific to ShoppingItems */}
        </div>
    );
}

export default ShoppingItems;
