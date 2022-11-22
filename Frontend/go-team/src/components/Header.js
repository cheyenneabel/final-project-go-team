import {NavLink } from "react-router-dom"
import React from "react"
import "./Header.css"

const Header = () => (
    <div className='header'>
        <h2>Go Team</h2>
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Team 200</NavLink>
        </ul>
    </div>
)

export default Header;