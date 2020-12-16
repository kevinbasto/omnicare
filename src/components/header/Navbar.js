import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="row no-gutters d-flex justify-content-center align-items-center navigation">
                <ul className="nav_menu">
                    <li className="nav_option">1</li>
                    <li className="nav_option">2</li>
                    <li className="nav_option">3</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
