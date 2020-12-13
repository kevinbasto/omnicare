import React from 'react'
import './Searchbar.css'

//icons
import {ReactComponent as SearchIcon } from '../icons/search-24px.svg'

function Searchbar() {
    return (
        <div className="col-6 d-none d-md-block ">
            <div className="row no-gutters d-flex justify-content-center align-items-center searchbar">
                <input className="search_field"/>
                <button className="search_button"><SearchIcon /></button>
            </div>
        </div>
    )
}

export default Searchbar
