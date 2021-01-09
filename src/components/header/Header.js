import React from 'react';
import './Header.css';

//subcomponents
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Logo from '../Commons/Logo';

function Header() {
    return (
        <header className="d-flex row no-gutters header">
            <Logo classes="col-3 col-sm-6 col-md-3 d-none d-sm-block"/>
            <SearchBar />
            <Navbar />
        </header>
    )
}

export default Header
