import React from 'react';
import './NavigationItem.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = (props) => (
    <li className="NavigationItem">
        <Link to={props.link}>{props.children}</Link>
    </li>
);

NavigationItem.propTypes = {
    link :  PropTypes.string
}

export default NavigationItem;