import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem';

const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/">ecommerce</NavigationItem>
        <NavigationItem link="/cart">cart</NavigationItem>
    </ul>
);

export default NavigationItems;