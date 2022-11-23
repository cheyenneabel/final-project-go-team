import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">

        <NavLink id="tennisSchedule" to="/tennisSchedule">Schedule a Match</NavLink>
        <NavLink id="postATennisMatch" to="/postATennisMatch">Join a Match</NavLink>

    </section>

)

export default MainPage