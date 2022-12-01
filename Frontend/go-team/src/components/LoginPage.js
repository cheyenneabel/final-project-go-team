import React from "react"
import { NavLink } from "react-router-dom";
import './LoginPage.css';

class LoginPage extends React.Component{
    constructor(props){
           super(props);
            this.state = {
             email: "",
             password: "",
            }
            this.handleLogin=this.handleLogin.bind(this)
    }

    handleLogin(e) {
        e.preventDefault()
        fetch(`http://localhost:8080/login`,
        
        {method: 'POST',
        mode:'cors',
        body: JSON.stringify(e)
        }) .then((response) => response.json())

    } 

   render() {
    return(
        <div className="Login">
            <h3>Login</h3> 
            <form onSubmit={this.handleLogin}>
                
                <input type="text" id="email" placeholder="Email" onChange={(e) => {e.preventDefault(); this.setState({email: e.target.value})}}></input>          
                <input type="password" id="password" placeholder="Password" onChange={(e) => {e.preventDefault(); this.setState({password: e.target.value})}}></input>
                <input type="submit" id="submit" value = "Login"></input>
         
            </form>
        <NavLink className="signUp" to='/signUpPage'>Don't have an account? Sign up here.</NavLink>  
    </div>
    );
}}

export default LoginPage;