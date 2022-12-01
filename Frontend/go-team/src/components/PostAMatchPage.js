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
      
    
      

      render () {
        return (
          <div className="matches">
            
          </div>

            
        )
      }

      


  
        // create a fetch post. 
        
        //create input field for user to enter location

        // create radio button for user to enter skill level (similar radio button on tennisSchedulePage)

        // create input field for user to enter date and time (shown as a calendar if we can figure it out)

        // create "schedule" button to post the match once the button is clicked

    
  


export default PostAMatchPage;