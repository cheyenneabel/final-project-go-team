import React from "react";
import { NavLink } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => (
    
    <div className="Login">
        <h3>Login Page</h3> 
        <NavLink to='/signUpPage'>Don't have an account? Sign up here.</NavLink>  
    </div>
    
)

export default LoginPage;