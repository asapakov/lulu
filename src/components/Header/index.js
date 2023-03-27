import React from "react";
import header_logo from '../../assets/logo/OD.svg'

const Header = () => {

    return(
        <div className="header">
            <img src={header_logo} alt="logo"/>
        </div>
    )
}

export default Header;