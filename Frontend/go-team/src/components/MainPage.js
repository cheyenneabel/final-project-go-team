import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">
        <h3 id="welcomeMessage">Go Team! Let's find a game.</h3>

        <NavLink id="tennisSchedule" to="/tennisSchedule">Tennis Match Schedule</NavLink>

    </section>

)

export default MainPage