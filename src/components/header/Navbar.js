import React, { useState } from 'react'
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
                    <NavItem icon={<UserIcon />} title="Hola!" >
                        <DropdownMenu>
                            <DropdownItem title="Mi perfil" />
                            <DropdownItem title="Salir" />
                        </DropdownMenu>
                    </NavItem>
                    <NavItem icon={<SettingsIcon />} class="settings_option" title="opciones" />
                    <NavItem icon={<ShoppingCartIcon /> } title="carrito de compras" />
                </ul>
            </div>
        </div>
    )
}

function NavItem(props){
    const [Open, setOpen] = useState(false)

    return (
        <li>
            <div className={props.class? "nav_option " + props.class: "nav_option"} onClick={() => setOpen(!Open)} title={props.title} >
                {props.icon}
            </div>
            {Open && props.children}
        </li>
    );
}

function DropdownMenu(props){
    return (
    <div className="dropdown_menu">
        {props.children}
    </div>
    );
}

function DropdownItem(props){
    return(
        <p className="dropdown_item">
            {props.title}
        </p>
    );
}

export default Navbar
