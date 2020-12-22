import React from 'react'
import './Footer.css'

//commons import
import Logo from '../Commons/Logo'

function Footer() {
    return (
        <div className="row no-gutters d-flex footer">
            <Logo>
                <span className="logo_slogan">Life Matters</span>
            </Logo>
        </div>
    )
}

export default Footer
