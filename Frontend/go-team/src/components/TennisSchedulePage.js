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
        fetch(`http://localhost:8080/matchesLocation/${this.state.location}`)
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
        <div className="matches">
        <h3 className="schedule">Join A Match</h3>
        <form onSubmit={this.handleByLocation}>
          <input type="text" placeholder="location" onChange={(e) => {e.preventDefault(); this.setState({location: e.target.value}); console.log(this.state.location)}}></input>
          <div onChange={(e) => {e.preventDefault(); this.setState({skillLevel: e.target.value}); console.log(this.state.skillLevel)}}>                           
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
        {
                (
                    !this.state.locationBtnClicked ? <p> </p> : (          
                        <ul>
                            {
                                this.state.matches.map((match) => (
                                    <li key = {match.id}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>{match.time}</p>
                                        <p>{match.date}</p>

                                    </li>))
                            }
                        </ul>   
                    )                      
                )                         
            } 
      </div>           
    )
  }

}



export default TennisSchedulePage;