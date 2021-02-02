import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem';

<<<<<<< HEAD
const NavigationItems = () => (
=======
const NavigationItems = (props) => (
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
    <ul className="NavigationItems">
        <NavigationItem link="/">ecommerce</NavigationItem>
        <NavigationItem link="/cart">cart</NavigationItem>
    </ul>
);

export default NavigationItems;