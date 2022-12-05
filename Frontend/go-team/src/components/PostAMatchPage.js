import React, { useState } from "react";
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
}
      
    handleSubmit(e){
      e.preventDefault();
      if(this.state.location !== "" && this.state.date !=="" && this.state.time !=="" && this.state.skillLevel !=="") {
        fetch('https://localhost:8080/schedule',)
       
      //   {method: 'POST',
      //   mode:'cors',
      //   headers: new Headers({'content-type': 'application/json'}),
      //   body: JSON.stringify({
      //       "time": this.state.time,
      //       "date": this.state.date,
      //       "location": this.state.location,
      //       "skillLevel": this.state.skillLevel
      //   })
      // }
      }
     
       
      
    }
      
      render () {
        return (
          <div className="matches">
            <h3 className="schedule">Schedule A Match</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="location" onChange={(e) => {e.preventDefault(); this.setState({location: e.target.value})}}></input>
              <div onChange={(e) => {e.preventDefault(); this.setState({skillLevel: e.target.value})}}>                           
                <label>Select Skill Level:</label>                           
                <label><input type="radio" id="skillLevelButton" value="Beginner" name="skillLevel"></input>Beginner</label>                         
                <label><input type="radio" id="skillLevelButton" value="Intermediate" name="skillLevel"></input>Intermediate</label>                     
                <label><input type="radio" id="skillLevelButton" value="Professional" name="skillLevel"></input>Professional</label>                       
                <label><input type="radio" id="skillLevelButton" value="Expert" name="skillLevel"></input>Expert</label>                      
              </div>
              <input type="date" onChange={(e) => {e.preventDefault(); this.setState({date: e.target.value}); console.log(this.state.date)}}></input>
              <input type="time" onChange={(e) => {e.preventDefault(); this.setState({time: e.target.value}); console.log(this.state.time)}}></input>
              <input type="Submit" id="submit" value="Join"></input>
            </form>
          </div>


            
        )
      }
  
    }
export default PostAMatchPage