import React from 'react'
import './Navbar.css'

//icons import
import { ReactComponent as UserIcon } from '../icons/person-24px.svg'
import { ReactComponent as SettingsIcon } from '../icons/settings-24px.svg'
import { ReactComponent as ShoppingCartIcon } from '../icons/shopping_cart-24px.svg'

function Navbar() {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="row no-gutters d-flex justify-content-center align-items-center navigation">
                <ul className="nav_menu">
                    <li className="nav_option"> <UserIcon /> </li>
                    <li className="nav_option"> <SettingsIcon /> </li>
                    <li className="nav_option"> <ShoppingCartIcon /> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
