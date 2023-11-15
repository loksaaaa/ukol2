// MemberList.js

import React, { useState } from 'react';
import Member from './Member';
import ShoppingListName from './ShoppingListName';
import './MemberList.css'; // Import the CSS file

const MemberList = () => {
    // Sample member data (you can replace it with your actual data)
    const [membersData, setMembersData] = useState([
        { id: 1, name: 'Member 1' },
        { id: 2, name: 'Member 2' },
        { id: 3, name: 'Member 3' },
        // Add more members as needed
    ]);

    const handleRemoveMember = (id) => {
        // Filter out the member with the specified id
        const updatedMembers = membersData.filter(member => member.id !== id);
        // Update the state to re-render the component without the removed member
        setMembersData(updatedMembers);
    };

    const handleAddMember = () => {
        // Prompt for the new member's name
        const memberName = prompt('Enter the name for the new member:');
        if (memberName !== null && memberName !== '') {
            // Generate a unique id for the new member
            const newId = Math.max(...membersData.map(member => member.id), 0) + 1;
            // Create a new member object with the specified name
            const newMember = { id: newId, name: memberName };
            // Update the state to include the new member
            setMembersData([...membersData, newMember]);
            // Set the header name to the new member's name
            handleRenameList(newMember.name);
        }
    };

    const handleRenameList = (newName) => {
        // Perform any necessary actions when the list is renamed
        console.log(`Shopping list renamed to ${newName}`);
    };

    return (
        <div className="member-list-container">
            {/* Add ShoppingListName component above the Member components */}
            <ShoppingListName onRename={handleRenameList} onAddMember={handleAddMember} />
            {/* List of Member components */}
            <ul className="member-list">
                {membersData.map(member => (
                    <li key={member.id}>
                        {/* Pass handleRemoveMember function to the Member component */}
                        <Member name={member.name} onRemove={() => handleRemoveMember(member.id)} />
                    </li>
                ))}
            </ul>
            {/* Additional elements go here */}
        </div>
    );
}

export default MemberList;
