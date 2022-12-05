import React from "react"
import { NavLink } from "react-router-dom";
import './LoginPage.css';

class LoginPage extends React.Component{
    constructor(props){
           super(props);
            this.state = {
             email: "",
             password: "",
             res: false
            }
            this.handleLogin=this.handleLogin.bind(this)
    }

         handleLogin(e) {e.preventDefault();
             console.log("LOGIN");
             console.log(e);
             console.log(this.state.confirmed);
             if(this.state.confirmed && this.state.email !== "" && this.state.password !== "") 
     
             {fetch('http://localhost:8080/login',
             
             {method: 'POST',
             mode:'cors',
             headers: new Headers({'content-type': 'application/json'}),
             body: JSON.stringify({
                 
                 "email": this.state.email,
                 "password": this.state.password,
                
             })})
             .then(response => {if(response.ok) response.json})
             .then(json)
            
             }
             else { document.getElementById("title").innerHTML = "Error confirming password"}
     
         }
     
         handlePassword(e) {e.preventDefault();
             this.setState({confirmed: true})
         }

   render() {
    return(
        <div className="Login">
            <h3 id="title">Login</h3> 
            <form onSubmit={this.handleLogin}>
                
                <input type="text" id="email" placeholder="Email" onChange={(e) => {e.preventDefault(); this.setState({email: e.target.value})}}></input>          
                <input type="password" id="password" placeholder="Password" onChange={(e) => {e.preventDefault(); this.setState({password: e.target.value})}}></input>
                <NavLink to='/sports'><input type="Submit" id="submit" value="Login"></input></NavLink>

            </form>
        <NavLink id="signUp" to='/signUpPage'>Don't have an account? Sign up here.</NavLink>  
    </div>
    );
}}

export default LoginPage;