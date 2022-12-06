import React from 'react';
import './TennisSchedulePage.css';
 
class TennisSchedulePage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {
          matches: [],
          allMatchesBtnClicked: false,
          locationBtnClicked: false,
          skillLevelBtnClicked: false,
          dateBtnClicked: false,
          timeBtnClicked: false,
        };
        this.handleAllMatches = this.handleAllMatches.bind(this);
        this.handleByLocation = this.handleByLocation.bind(this);
        this.handleBySkillLevel = this.handleBySkillLevel.bind(this);
        this.handleByDate = this.handleByDate.bind(this);
        this.handleByTime = this.handleByTime.bind(this);
    }
// Handling all matches  
    handleAllMatches(e){
        e.preventDefault();
        fetch('http://localhost:8080/Matches')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: true})
        this.setState({locationBtnClicked: false})
        this.setState({skillLevelBtnClicked: false})
        this.setState({dateBtnClicked: false})
        this.setState({timeBtnClicked: false})
    }
// Handling matches by location
    handleByLocation(e){
        e.preventDefault();
        fetch('http://localhost:8080/matches/{location}')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: false})
        this.setState({locationBtnClicked: true})
        this.setState({skillLevelBtnClicked: false})
        this.setState({dateBtnClicked: false})
        this.setState({timeBtnClicked: false})
    }

// Handling matches by skill level
    handleBySkillLevel(e){
        e.preventDefault()
        fetch('http://localhost:8080/matches/{skillLevel}')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: false})
        this.setState({locationBtnClicked: false})
        this.setState({skillLevelBtnClicked: true})
        this.setState({dateBtnClicked: false})
        this.setState({timeBtnClicked: false})
    }

// Handling matches by date
    handleByDate(e){
        e.preventDefault();
        fetch('http://localhost:8080/matches/{date}')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: false})
        this.setState({locationBtnClicked: false})
        this.setState({skillLevelBtnClicked: false})
        this.setState({dateBtnClicked: true})
        this.setState({timeBtnClicked: false})
    }

// Handling matches by time
    handleByTime(e){
        e.preventDefault();
        fetch('http://localhost:8080/matches/{time}')
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: false})
        this.setState({locationBtnClicked: false})
        this.setState({skillLevelBtnClicked: false})
        this.setState({dateBtnClicked: false})
        this.setState({timeBtnClicked: true})
    }

   render() {
    return(
   
    <div className="tennisSchedulePage">
        <h2 id="scheduleGreeting">Join a match</h2>
            <div className="scheduleText">
                <p>All available matches and results will adjust when filtering options are selected.</p>
  {/*--------------------------All Matches------------------------------*/}          
            <button id="all-matches" onClick={this.handleAllMatches}>See All</button>
            {
                (
                    !this.state.allMatchesBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.date}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.date}</p>
                                        <p>{match.time}</p>
                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            }  
 {/*-------------------------Matches by Location----------------------*/}
            <button id="by-location" onClick={this.handleByLocation}>Find by Location</button>
            {
                (
                    !this.state.locationBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.date}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.date}</p>
                                        <p>{match.time}</p>
                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            } 
{/*-------------------------Matches by Skill Level----------------------*/}
            <button id="by-skill-level" onClick={this.handleBySkillLevel}>Find by Skill Level</button>
            {
                (
                    !this.state.skillLevelBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.date}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.date}</p>
                                        <p>{match.time}</p>
                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            } 
 {/*-------------------------Matches by Date----------------------*/}
            <button id="by-date" onClick={this.handleByDate}>Find by Date</button>
            {
                (
                    !this.state.dateBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.date}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.date}</p>
                                        <p>{match.time}</p>
                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            } 

 {/*-------------------------Matches by Time----------------------*/}
            <button id="by-time" onClick={this.handleByTime}>Find by Time</button>
            {
                (
                    !this.state.timeBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.date}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.date}</p>
                                        <p>{match.time}</p>
                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            } 
            </div>   
    </div>
    )
   }
}

export default TennisSchedulePage;