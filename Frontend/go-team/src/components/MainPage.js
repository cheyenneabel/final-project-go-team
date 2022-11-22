import React from "react";
import { NavLink } from "react-router-dom";
import './MainPage.css';

const MainPage = () => (
    <section className="mainPage">
        <h3 id="welcomeMessage">Welcome to the Main Page. Go Team!</h3>

        <NavLink id="tennisSchedule" to="/tennisSchedule">Tennis Match Schedule</NavLink>

        <NavLink id="team200" to="/team200">Team 200 About Us</NavLink>

    </section>

)

export default MainPage