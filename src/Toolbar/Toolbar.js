import React from 'react';
import './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems';

<<<<<<< HEAD
const Toolbar = () => {
=======
const Toolbar = (props) => {
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4
    return (
        <header className="Toolbar">
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Toolbar;