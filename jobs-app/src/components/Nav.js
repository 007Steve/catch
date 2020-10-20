import React from 'react'
import './Nav.css'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import Logo from'/Users/stephen/jobs-app/src/logo.svg'
function Nav() {
    return (
        <div className="nav">
            <div className="nav__header">
                <img className="nav__logo" src={Logo}  alt=""/>
                <div className="nav__icons">
                    <WbSunnyIcon className="nav__icon"/>
                    <ToggleOffIcon  className="nav__icon"/>
                    <Brightness3Icon  className="nav__icon"/>
                </div>
            </div>
           
        </div>
    )
}

export default Nav
