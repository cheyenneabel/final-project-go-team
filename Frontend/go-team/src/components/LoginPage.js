import React from "react";
import { NavLink } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => (
    
    <div className="Login">
        <h3>Login Page</h3> 
            <form>
                <label for="email">Email</label> 
                <input type="text" id="email" name="email"></input>
                <label for="password">Password</label>
                <input type="text" id="password" name="password"></input>
            </form>
        <NavLink className="signUp" to='/signUpPage'>Don't have an account? Sign up here.</NavLink>  
    </div>
    
)

export default LoginPage;