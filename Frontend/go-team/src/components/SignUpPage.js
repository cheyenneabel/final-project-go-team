import React from "react";
import './SignUpPage.css';
import { NavLink } from "react-router-dom";

class SignUpPage extends React.Component{

    constructor(props){
       super(props)
            this.state = {   
            email:"",
            password:"",     
            firstName:"",
            lastName:"", 
            skillLevel:"",
            city:"",
            confirmed: false           
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.handlePassword = this.handlePassword.bind(this)
    }
    handleSignup(e) {e.preventDefault();
        console.log("SIGNUP");
        console.log(e);
        console.log(this.state.confirmed);
        if(this.state.confirmed) 

        {fetch('http://localhost:8080/signup',
        
        {method: 'POST',
        mode:'cors',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "city": this.state.city,
            "skillLevel": this.state.skillLevel
        })})
        }
        else { document.getElementById("signupConfirm").innerHTML = "Error confirming password"}

    }

    handlePassword(e) {e.preventDefault();
        this.setState({confirmed: true})
    }

    render () {
        return(
            <div className="signup">
                <h3>Signup</h3>
                    <p id="signupConfirm">Please enter all info and click submit to create account</p>
                    <form onSubmit={this.handleSignup}>
                
                        <input type="text" id="info" placeholder="First Name" onChange={(e) => {e.preventDefault(); this.setState({firstName: e.target.value})}}></input>
                        
                        <input type="text" id="info" placeholder="Last Name" onChange={(e) => {e.preventDefault(); this.setState({lastName: e.target.value})}}></input>
                        
                        <input type="text" id="info" placeholder="Email" onChange={(e) => {e.preventDefault(); this.setState({email: e.target.value})}}></input>
                        
                        <input type="password" id="info" placeholder="Password" onChange={(e) => {e.preventDefault(); this.setState({password: e.target.value})}}></input>
                       
                        <input type="password" id="info" placeholder="Confirm Password" onChange={this.handlePassword}></input>                   
                        
                        
                        <input type="text" id="info" placeholder="City" onChange={(e) => {e.preventDefault(); this.setState({city: e.target.value})}}></input>

                        <div onChange={(e) => {e.preventDefault(); this.setState({skillLevel: e.target.value})}}>
                            <label>Select Skill Level:</label>
                            <label><input type="radio" id="skillLevelButton" value="Beginner" name="skillLevel"></input>Beginner</label>
                            <label><input type="radio" id="skillLevelButton" value="Intermediate" name="skillLevel"></input>Intermediate</label>
                            <label><input type="radio" id="skillLevelButton" value="Professional" name="skillLevel"></input>Professional</label>
                            <label><input type="radio" id="skillLevelButton" value="Expert" name="skillLevel"></input>Expert</label>
                        </div>
                       <NavLink id="sports" to='/sports'><input type="Submit" id="submitSignUp"></input></NavLink>
                    </form>

            </div>
        )
    }

}

export default SignUpPage;