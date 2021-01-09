import React from 'react'
import './Footer.css'

//commons import
import Logo from '../Commons/Logo'

function Footer() {
    return (
        <div className="row no-gutters d-flex footer">
            <Logo classes="col-12 col-md-4 d-none d-sm-block" >
                <span className="logo_slogan">Life Matters</span>
            </Logo>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-wrap flex-column">
                <span className="legalNotice" >Todos los derechos reservados</span>
                <span className="legalNotice" >Omnicare S de RL</span>
            </div>
        </div>
    )
}

export default Footer
