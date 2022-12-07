import React from "react"
import { NavLink } from "react-router-dom";
import './LoginPage.css';
import { Redirect } from "react-router-dom";
import SportsPage from "./SportsPage";


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
            
             if(this.state.email !== "" && this.state.password !== "") 
     
             {fetch('http://localhost:8080/login',
             
             {method: 'POST',
             mode:'cors',
             headers: new Headers({'content-type': 'application/json'}),
             body: JSON.stringify({
                 
                 "email": this.state.email,
                 "password": this.state.password
                
             })})
                       

             .then(response => {if(response.ok) {return response.json(); } else throw Error(<p>{response.statusText}</p>)});
             }
             else { document.getElementById("title").innerHTML = "Error confirming password" }
     
          
         }

   render() {
    return(
        <div className="Login">
            {/* <h3 id="title">Login</h3>  */}
            <fieldset>
                <legend>Login</legend>
            <form onSubmit={this.handleLogin}>
                
                <input type="text" id="email" placeholder="Email" onChange={(e) => {e.preventDefault(); this.setState({email: e.target.value})}}></input>          
                <input type="password" id="password" placeholder="Password" onChange={(e) => {e.preventDefault(); this.setState({password: e.target.value})}}></input>
                <NavLink id="sports" to='/sports'><input type="Submit" id="sports" value="Login"></input></NavLink>
                
            </form></fieldset>
           
    </div>
    );
}}

export default LoginPage;