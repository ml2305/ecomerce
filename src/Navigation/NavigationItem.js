import React from 'react';
import './NavigationItem.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4

const NavigationItem = (props) => (
    <li className="NavigationItem">
        <Link to={props.link}>{props.children}</Link>
    </li>
);

<<<<<<< HEAD
NavigationItem.propTypes = {
    link :  PropTypes.string
}

=======
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
export default NavigationItem;