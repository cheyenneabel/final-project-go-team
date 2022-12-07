import { NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";
import logoImage from "./images/logo-color.png";



const Header = () => (
    <div className="header">
        <div className="logo">
            <NavLink to='/'><img src={logoImage} alt="logo"/></NavLink>
        </div>
        <ul id="links">
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/loginPage'>Login | Sign Up</NavLink>
        </ul>
    </div>
)

export default Header;