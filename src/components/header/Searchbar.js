import React, { useState } from 'react'
import './Searchbar.css'

//icons
import {ReactComponent as SearchIcon } from '../icons/search-24px.svg'

function Searchbar() {
    const [searchValue, setSearchValue] = useState('')

    const search = () => {
        console.log(searchValue);
    }

    return (
        <div className="col-6 d-none d-md-block ">
            <div className="row no-gutters d-flex justify-content-center align-items-center searchbar">
                <input className="search_field" defaultValue={searchValue} onChange={event => setSearchValue(event.target.value) } />
                <button className="search_button" onClick={search} ><SearchIcon /></button>
            </div>
        </div>
    )
}

export default Searchbar
