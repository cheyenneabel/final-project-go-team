import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactDOM } from "react-dom/client";

const PostAMatchPage = () => (
  <div className="postAMatch">
    <h2>Schedule a Match</h2>
    {
        // create input field for user to enter location

        // create radio button for user to enter skill level (similar radio button on tennisSchedulePage)

        // create input field for user to enter date and time (shown as a calendar if we can figure it out)

        // create "schedule" button to post the match once the button is clicked

    }
     {
      //  const [location, setLocation] = useState("";)
        // <form>
        //     <label>Enter your location:
        //         <input
        //             type="text"
        //             value={location}
        //             onChange={(e) => setLocation(e.target.value)}
        //         />
        //     </label>    
        // </form>    
    
   

        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // root.render(<postLocation />);
  
    }
  </div>
)

export default PostAMatchPage;