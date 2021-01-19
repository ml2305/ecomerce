import React from 'react';
import './Layout.css';
import Toolbar from '../Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <div>
            <Toolbar />
            <main className='Content'>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;