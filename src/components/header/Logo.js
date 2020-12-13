import React from 'react'
import './Logo.css'
import {ReactComponent as Omnilogo} from './omnicare_web.svg'

function Logo() {
    return (
        <div className="col-3 col-sm-6 col-md-3 d-none d-sm-block">
            <div className="row no-gutters d-flex justify-content-center align-items-center logo">
                <div className="logo_container">
                    <Omnilogo /><p>mnicare</p>
                </div>
            </div>
        </div>
    )
}


export default Logo
