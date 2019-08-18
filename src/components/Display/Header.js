import React from "react";
import logo from "../../images/logo.png"

function Header () {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/"> 
                <img src={logo} width="150px" height="150px" alt="" />
            </a>
        </nav>
    )
}

export default Header