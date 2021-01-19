import React from 'react';
import './NavigationItem.css';
import {Link} from 'react-router-dom';

const NavigationItem = (props) => (
    <li className="NavigationItem">
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default NavigationItem;