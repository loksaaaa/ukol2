// Item.js

import React, { useState } from 'react';
import './Item.css'; // Import the CSS file if needed

const Item = ({ itemName, onRemove }) => {
    const [isDone, setIsDone] = useState(false);

    const handleRemove = () => {
        const isConfirmed = window.confirm('Are you sure you want to remove this item?');
        if (isConfirmed) {
            onRemove();
        }
    };

    const handleMarkAsDone = () => {
        setIsDone(!isDone);
    };

    return (
        <div className={`item-container ${isDone ? 'done' : ''}`}>
            <h4>{itemName}</h4>
            {/* Add Remove button with the "remove-button" class */}
            <button className="remove-button" onClick={handleRemove}>
                Remove
            </button>
            {/* Add Mark as Done button */}
            <button className="mark-as-done-button" onClick={handleMarkAsDone}>
                {isDone ? 'Done' : 'Mark as Done'}
            </button>
            {/* Additional content or functionality specific to Item */}
        </div>
    );
}

export default Item;
