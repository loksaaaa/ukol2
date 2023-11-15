// ListDetail.js

import React from 'react';
import Header from './Header';
import MemberList from './MemberList';
import ItemList from './ItemList';
import './ListDetail.css'; // Import the CSS file if needed

const ListDetail = () => {
    return (
        <div className="list-detail-container">
            {/* Header component */}
            <Header />
            {/* Member List component */}
            <MemberList />
            {/* Item List component */}
            <ItemList />
            {/* Additional content or functionality specific to ListDetail */}
        </div>
    );
}

export default ListDetail;
