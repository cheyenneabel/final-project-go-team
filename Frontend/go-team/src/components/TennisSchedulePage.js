import React from 'react';
import './TennisSchedulePage.css';
 
class TennisSchedulePage extends React.Component { 
    constructor (props) {
        super(props)
        this.state = {
          location: "",
          skillLevel:"",
          date:"",
          time:""
        }
        this.handleAllMatches = this.handleAllMatches.bind(this);
        this.handleSingleMatch = this.handleSingleMatch.bind(this);
    }
    
    handleAllMatches(){
        fetch('http://localhost:8080/match')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
    }

   render() {
    return(
   
    <div className="tennisSchedulePage">
        <h2 id="scheduleGreeting">Join a match</h2>
            <div className="scheduleText">
                <p>All available matches and results will adjust when filtering options are selected.</p>
  {/*--------------------------All Matches------------------------------*/}          
            
            <ul>
                {
                    this.state.matches.map(match =>
                        <li key = {match.date}>
                            <h3>{match.location}</h3>
                            <h4>{match.skillLevel}</h4>
                            <p>{match.description}</p>
                        </li>)
                }
            </ul>
            
            </div>
        
    </div>
   )}
}

export default TennisSchedulePage;