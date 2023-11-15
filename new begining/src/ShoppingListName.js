// ShoppingListName.js

import React, { useState } from 'react';
import './ShoppingListName.css'; // Import the CSS file

const ShoppingListName = ({ onRename, onAddMember }) => {
    const [listName, setListName] = useState('Shopping List Name'); // Initial list name

    const handleRename = () => {
        const newName = prompt('Enter a new name:', listName);
        if (newName !== null && newName !== '') {
            setListName(newName);
            onRename(newName);
        }
    };

    const handleAddMember = () => {
        onAddMember();
    };

    return (
        <div className="shopping-list-name">
            <h2>{listName}</h2>
            {/* Rename button */}
            <button onClick={handleRename}>Rename</button>
            {/* Add Member button */}
            <button onClick={handleAddMember}>Add Member</button>
            {/* Additional content or functionality specific to ShoppingListName */}
        </div>
    );
}

export default ShoppingListName;
