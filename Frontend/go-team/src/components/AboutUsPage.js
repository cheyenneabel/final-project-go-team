import React from "react";
import "./AboutUs.css";
import github from "./images/Github.png"
import linkedIn from "./images/linkedin.webp"

const AboutUsPage = () => (
    <div className="aboutUs">
        <h2>About Us</h2>
            <h4 id="ourName">Thanaa' Jaradat</h4>
            <img class="photo" src alt="photo" />
                <p id="story">A Computer Science graduate seeking a Software Development role after completing We Can Code IT Bootcamp. 
                    Hands-on project experience building both the front-end and back-end of web apps using Java, Bootstrap, Node.js, Django, and other frameworks.</p>
                    <a className="github" href=""> <img src={github}/></a>
                    <a className="Linkedin" href=""> <img src={linkedIn}/></a>
            <h4 id="ourName">Omar Alkhulaidi</h4>
            <img class="photo" src alt="photo" />
                <p id="story">Seeking a Software Development role after completing We Can Code It Bootcamp.
                Currently gaining hands-on project experience building both the front-end and back-end of web apps.
                </p>
                <a className="github" href=""> <img src={github}/></a>
                    <a className="Linkedin" href="http://linkedin.com/in/omar-alkhulaidi-76ab111aa"> <img src={linkedIn}/></a>
            <h4 id="ourName">Ayanle Dahir</h4>
            <img class="photo" src alt="photo" />
                <p id="story">Seeking a Software Development role after completing We Can Code It Bootcamp.
                Currently gaining hands-on project experience building both the front-end and back-end of web apps.
                </p>
                <a className="github" href="https://github.com/Ayanle6"> <img src={github}/></a>
                    <a className="Linkedin" href="https://www.linkedin.com/in/ayanle-dahir-770b30250/"> <img src={linkedIn}/></a>
            <h4 id="ourName">Cheyenne Abel</h4>
            <img class="photo" src alt="photo" />
                <p id="story">Received a BFA in Dance from The Ohio State University in 2013. 
                    Transitioning into a Software Development role after completing We Can Code IT Bootcamp. 
                    Currently gaining hands-on project experience building both the front-end and back-end of web apps.</p>
                    <a className="github" href=""> <img src={github}/></a>
                    <a className="Linkedin" href=""> <img src={linkedIn}/></a>
    </div>
);

export default AboutUsPage;