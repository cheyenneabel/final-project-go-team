import React from "react";
import './UserPage.css';
import Hilliard from "./images/Hilliard.jpg";

class UserPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: "",
            scheduledMatches: "",
            skillLevel: "",
            location: "",
            date: "",
            time: "",
            buttonClicked: false,
            myMatches: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleSubmit(e){
            e.preventDefault();
            fetch('http://localhost:8080/8/myMatches')
            .then((response) => response.json())
            .then((json) => {this.setState({myMatches:json}); console.log(json)})
            this.setState({buttonClicked: true})
            

        }

        render() {
            return (
                <div className="usersMatches">
                    <h2>My profile</h2>
                    <form onSubmit={this.handleSubmit}>
                    <input type="submit" id="list" value="See My Matches"></input>
                    </form>
                    {
                    (
                        !this.state.buttonClicked ? <p> </p> : (
                        <div id="seeMatches">
                            
                                {
                                    this.state.myMatches.map((match) =>(
                                        <div key = {match.id}>
                                            <h3>{match.location}</h3>
                                            <p>{match.date}</p>
                                            <p> {match.time}</p>
                                            <p> {match.skillLevel}</p>
                                            <img src={Hilliard} id="tennis" alt="Tennis court"/>
                                        </div>))
                                }
                           
                        </div>
                        )
                    )
                }
                </div>
            )
        }
}

export default UserPage