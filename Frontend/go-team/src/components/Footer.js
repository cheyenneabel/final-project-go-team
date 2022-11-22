import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {

    return (<div className="footer">
    <NavLink to='/team200'> About Us </NavLink>
        <large>&copy; Team200 2022</large>
        </div>
    )
}

export default Footer;