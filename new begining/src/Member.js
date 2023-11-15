// Member.js

import React from 'react';
import './Member.css'; // Import the CSS file

const Member = ({ name, onRemove }) => {
    const handleRemove = () => {
        if (window.confirm("Are you sure you want to remove this member?")) {
            onRemove();
        }
    };

    const handleLeave = () => {
        if (window.confirm("Are you sure you want to leave this list?")) {
            onRemove(); // Call the same function as Remove
        }
    };

    return (
        <div className="member-container">
            {/* Display the member's name */}
            <p>{name}</p>
            {/* Remove button */}
            <button onClick={handleRemove}>Remove</button>
            {/* Leave button with a confirming message */}
            <button onClick={handleLeave}>Leave</button>
            {/* Additional elements go here */}
        </div>
    );
}

export default Member;


