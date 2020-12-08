import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="row">
            <div className="col-3 d-none d-sm-block logo">
                <p>Hello world!</p>
            </div>
            <div className="col-6 d-none d-sm-block searchbar">
                <p>Hello world!</p>
            </div>
            <div className="col-12 col-sm-3 menu">
                <p>Hello world!</p>
            </div>
        </header>
    )
}

export default Header
