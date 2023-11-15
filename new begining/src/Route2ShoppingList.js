// Route2ShoppingList.js

import React from 'react';
import ListDetail from './ListDetail';
import './Route2ShoppingList.css';

const Route2ShoppingList = () => {
    return (
        <div className="shopping-list-container">
            {/* Include the ListDetail component */}
            <ListDetail />
        </div>
    );
}

export default Route2ShoppingList;
