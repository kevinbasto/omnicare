import React from 'react';
import './Header.css';

//subcomponents
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Logo from '../Commons/Logo';

function Header() {
    return (
        <header className="d-flex row no-gutters header">
            <Logo />
            <SearchBar />
            <Navbar />
        </header>
    )
}

export default Header
