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
            fetch('http://localhost:8080/5/myMatches')
            .then((response) => response.json())
            .then((json) => {this.setState({myMatches:json}); console.log(json)})
            this.setState({buttonClicked: true})
            

        }

        render() {
            return (
                <div className="usersMatches">
                    <h3>user's profile</h3>
                    <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="See My Matches"></input>
                    </form>
                    {
                    (
                        !this.state.buttonClicked ? <p> </p> : (
                        <div id="seeMatches">
                            <ul>
                                {
                                    this.state.myMatches.map((match) =>(
                                        <li key = {match.id}>
                                            <h3>{match.location}</h3>
                                            <p>{match.date}</p>
                                            <p> {match.time}</p>
                                            <p> {match.skillLevel}</p>
                                            <img src={Hilliard} alt="Tennis court"/>
                                        </li>))
                                }
                            </ul>
                        </div>
                        )
                    )
                }
                </div>
            )
        }
}

   


export default UserPage