import React from "react";
import { NavLink } from "react-router-dom";
import './SportsPage.css';

const SportsPage = () => (
    <section id="sportspage">
        <div className="grid-container">
            <NavLink id="Tennis" className="sport" to="/main">Tennis</NavLink>
            <NavLink id="soccer" className="sport" to="/main">Soccer</NavLink>
            <NavLink id="FootBall" className="sport" to="/main">FootBall</NavLink>
            <NavLink id="BasketBall" className="sport" to="/main">BasketBall</NavLink>
            <NavLink id="BaseBall" className="sport" to="/main">BaseBall</NavLink>
            <NavLink id="Hockey" className="sport" to="/main">Hockey</NavLink>
        </div>

        </section>
)

export default SportsPage