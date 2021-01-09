import React from 'react'
import './Logo.css'
import {ReactComponent as Omnilogo} from '../icons/omnicare_web.svg'

function Logo(props) {
    return (
        <div className={props.classes}>
            <div className="row no-gutters d-flex justify-content-center align-items-center logo">
                <div className="logo_container align-items-center">
                    <Omnilogo /><p>mnicare</p>
                </div>
            </div>
            {props?.children}
        </div>
    )
}


export default Logo
