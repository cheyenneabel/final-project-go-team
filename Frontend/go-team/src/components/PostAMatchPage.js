import React, { useState } from "react";
import './PostAMatchPage.css';
import { NavLink } from "react-router-dom";
import { ReactDOM } from "react-dom/client";

class PostAMatchPage extends React.Component {
 constructor (props) {
  super(props)
  this.state = {
    location: "",
    skillLevel:"",
    date:"",
    time:""
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}
      
    handleSubmit(e){
      e.preventDefault();
      if(this.state.location !== "" && this.state.date !== "" && this.state.time !== "" && this.state.skillLevel !== "") {
        fetch('http://localhost:8080/Schedule/3',
       
        {method: 'POST',
        mode:'cors',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "time": this.state.time,
            "date": this.state.date,
            "location": this.state.location,
            "skillLevel": this.state.skillLevel
        })
      })
      }      
      
    }     
      render () {
        return (
          <div className="matches"><fieldset id="pBox">
            <legend>Schedule A Match</legend>
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="pLocation" placeholder="location" onChange={(e) => {e.preventDefault(); this.setState({location: e.target.value}); console.log(this.state.location)}}></input>
              <br></br><div onChange={(e) => {e.preventDefault(); this.setState({skillLevel: e.target.value}); console.log(this.state.skillLevel)}}>                           
                <label>Select Skill Level:</label> <br></br>                          
                <label><input type="radio" id="skillLevelButton" value="Beginner" name="skillLevel"></input>Beginner</label>                         
                <label><input type="radio" id="skillLevelButton" value="Intermediate" name="skillLevel"></input>Intermediate</label>                     
                <label><input type="radio" id="skillLevelButton" value="Professional" name="skillLevel"></input>Professional</label>                       
                <label><input type="radio" id="skillLevelButton" value="Expert" name="skillLevel"></input>Expert</label>                      
              </div>
              <input type="date" id="pDate" onChange={(e) => {e.preventDefault(); this.setState({date: e.target.value}); console.log(this.state.date)}}></input>
              <input type="time" id="pTime" onChange={(e) => {e.preventDefault(); this.setState({time: e.target.value}); console.log(this.state.time)}}></input>
              <input type="Submit" id="submit" value="Join"></input>
            </form></fieldset>
          </div>           
        )
      }
  
    }
export default PostAMatchPage