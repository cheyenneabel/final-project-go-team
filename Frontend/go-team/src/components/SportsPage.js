import React from "react";
import { NavLink } from "react-router-dom";
import './SportsPage.css';

const SportsPage = () => (
    <section id="sportspage">
        <div className="sports">
            <NavLink id="Tennis" to="/main">Tennis</NavLink>
            <NavLink id="soccer" to="/main">soccer</NavLink>
            <NavLink id="FootBall" to="/main">FootBall</NavLink>
            <NavLink id="BasketBall" to="/main">BasketBall</NavLink>
            <NavLink id="BaseBall" to="/main">BaseBall</NavLink>
            <NavLink id="Hockey" to="/main">Hockey</NavLink>
        </div>

        </section>
)

export default SportsPage