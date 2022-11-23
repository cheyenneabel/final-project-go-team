import { NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";
import logoImage from "./images/logo-color.png";



const Header = () => (
    <div className="header">
        <div className="logo">
            <img src={logoImage} alt="logo"/>
        </div>
        <ul>
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/Login'>Login/Sign Up</NavLink>
        </ul>
    </div>
)

export default Header;