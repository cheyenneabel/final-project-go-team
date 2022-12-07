import React from 'react';
import './TennisSchedulePage.css';
import { NavLink } from 'react-router-dom';
 
class TennisSchedulePage extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {
          matches: [],
          singleMatch:{},
          location: "",
          date: "",
          time: "",
          skillLevel: "",
          allMatchesBtnClicked: false,
          joinBtnClicked:false
        };       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAllMatches = this.handleAllMatches.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }
// Handling all matches  
    handleAllMatches(e){
        e.preventDefault();
        fetch(`http://localhost:8080/Matches`)
        .then((response) => response.json())
        .then((json) => this.setState({matches: json}))
        this.setState({allMatchesBtnClicked: true})
        this.setState({joinBtnClicked: false})

       
    }

    handleJoin(id){
        // e.preventDefault();

        fetch(`http://localhost:8080/join/8`,
        {method: 'PUT',
        mode:'cors',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            // "location": this.state.location,
            // "date": this.state.date,
            // "time": this.state.time,
            // "skillLevel": this.state.skillLevel
            "id": id
        })}
        
        )

    }
// Handling matches by location
    // handleByLocation(e){
    //     e.preventDefault();
    //     this.setState({location: e.target.value})
    //     if(this.state.skillLevel !==""){
    //     fetch(`http://localhost:8080/LocationAndSkillLevel/${this.state.location}/${this.state.skillLevel}`) 
    //     .then((response) => response.json())
    //     .then((json) => this.setState({matches: json}))
    //     this.setState({locationBtnClicked: true})}
    //     else if(this.state.skillLevel !=="" && this.state.date !==""){
    //         fetch(`http://localhost:8080/DateAndSkillLevelAndLocation/${this.state.date}/${this.state.skillLevel}/${this.state.location}`) 
    //         .then((response) => response.json())
    //         .then((json) => this.setState({matches: json}))
    //         this.setState({locationBtnClicked: true})}  
    //     else if(this.state.skillLevel !=="" && this.state.date !=="" && this.state.time !==""){
    //         fetch(`http://localhost:8080/DateAndSkillLevelAndLocationAndTime/${this.state.date}/${this.state.skillLevel}/${this.state.location}/${this.state.time}`) 
    //         .then((response) => response.json())
    //         .then((json) => this.setState({matches: json}))
    //         this.setState({locationBtnClicked: true})} 
    //     fetch(`http://localhost:8080/Location/${this.state.location}`)
    //     .then((response) => response.json())
    //     .then((json) => this.setState({matches: json}))
    //     this.setState({locationBtnClicked: true})
        
    // }
    handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:8080/DateAndSkillLevelAndLocationAndTime/${this.state.date}/${this.state.skillLevel}/${this.state.location}/${this.state.time}`)
        .then((response) => response.json())
        .then((json) => {this.setState({singleMatch: json}); console.log(json)})
        this.setState({allMatchesBtnClicked: false})
        this.setState({joinBtnClicked: true})
    }

   render() {
    return(
        <div className="matches">
        <fieldset className="tennisSchedule">
        <legend>Join A Match</legend>
        <h4>Click "See All" to view all available matches</h4>
        <input type="button" onClick={this.handleAllMatches} id="seeAll" value="See all"></input>
        <h4>All available matches and results will adjust when filtering options are selected</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="location" placeholder="location" onChange={(e) => {e.preventDefault(); this.setState({location: e.target.value})}}></input>
          <div onChange={(e) => {e.preventDefault(); this.setState({skillLevel: e.target.value}); console.log(this.state.skillLevel)}}>   <br></br>                        
            <label>Select Skill Level:</label>                           
            <label><input type="radio" id="skillLevelButton" value="Beginner" name="skillLevel"></input>Beginner</label>                         
            <label><input type="radio" id="skillLevelButton" value="Intermediate" name="skillLevel"></input>Intermediate</label>                     
            <label><input type="radio" id="skillLevelButton" value="Professional" name="skillLevel"></input>Professional</label>                       
            <label><input type="radio" id="skillLevelButton" value="Expert" name="skillLevel"></input>Expert</label>                      
          </div>
          <input type="date" id="date" onChange={(e) => {e.preventDefault(); this.setState({date: e.target.value}); console.log(this.state.date)}}></input>
          <input type="time" id="time" onChange={(e) => {e.preventDefault(); this.setState({time: e.target.value}); console.log(this.state.time)}}></input>
          <NavLink id="user" to="/user"><input type="submit" id="submit" value="Search"></input></NavLink>
        </form>
        {
                (
                    !this.state.joinBtnClicked ? <p> </p> : (          
                        <div>
                                
                                {/* //  this.state.matches.map((match) => (
                                //      <li key = {match.id}> */}
                                        <h3>{this.state.singleMatch.location}</h3>
                                        <h4>{this.state.singleMatch.skillLevel}</h4>
                                        <p>{this.state.singleMatch.time}</p>
                                        <p>{this.state.singleMatch.date}</p>

                                    {/* </li>)) */}
                                
                        </div>   
                    )                      
                )                         
            } 
                {
                (
                    !this.state.allMatchesBtnClicked ? <p> </p> : (          
                        <div id="scheduleResult">
                            {
                                 this.state.matches.map((match) => (
                                    <li key = {match.id}>
                                        <h3>{match.location}</h3>
                                        <h4>{match.skillLevel}</h4>
                                        <p>Time:<br></br> {match.time}</p>
                                        <p>Date:<br></br> {match.date}</p>
                                        <input onSubmit={() => this.handleJoin(match.id)} type="submit" id="submitButton" value="Join"></input>


                                    </li>)
                                   )
                                 }
                        </div>   
                    )                      
                )                         
            } 
            </fieldset>
      </div>           
    )
  }

}
export default TennisSchedulePage;