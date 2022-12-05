import React from "react";
import { NavLink } from "react-router-dom";
import './SportsPage.css';
import Tennis from"./images/Tennis.webp"
import soccer from "./images/soccer.webp"
import football from "./images/football.webp"
import basketBall from "./images/basketball.webp"
import baseball from "./images/baseball.webp"
import hockey from "./images/hockey.webp"



const SportsPage = () => (
    <section id="sportspage">
        <div className="grid-container">

            <NavLink id="Tennis" className="sport" to="/main"><img className="logo" src={Tennis}/>Tennis</NavLink>
            <NavLink id="soccer" className="sport" to="/main"><img className="logo" src={soccer}/>Soccer</NavLink>
            <NavLink id="FootBall" className="sport" to="/main"><img className="logo" src={football}/>FootBall</NavLink>
            <NavLink id="BasketBall" className="sport" to="/main"><img className="logo" src={basketBall}/>BasketBall</NavLink>
            <NavLink id="BaseBall" className="sport" to="/main"><img className="logo" src={baseball}/>BaseBall</NavLink>
            <NavLink id="Hockey" className="sport" to="/main"><img className="logo" src={hockey}/>Hockey</NavLink>
        </div>

        </section>
)

export default SportsPage