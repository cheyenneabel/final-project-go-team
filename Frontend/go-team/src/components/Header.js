import { NavLink } from "react-router-dom"
import React from "react"
import "./Header.css"

const Header = () => (
    <div className='header'>
        {
        //logo goes here// 
        }
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
        </ul>
    </div>
)

export default Header;