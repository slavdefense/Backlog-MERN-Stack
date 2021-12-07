import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

const Users = (props) => {
  console.log(props.user)
  const [profiles, setProfiles] = useState([])
  // console.log(profiles)

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const handleClick =(evt)=>{
    evt.preventDefault()
    
    // console.log(evt)

  }

  return (
    <div className="user-list container">
      <h1>Greetings {props.user.name}  {props.user.email} </h1>
      <h4>You are  {!props.user.isAdmin? 'Not an admin':'Is an Admin'} </h4>

      <h6>Assign users to a team</h6>
  
      {profiles.length ? 
      <div id="cont-d">
        
        {profiles.map((profile)=> {
          return(
            <div className="assign">
              <Link to="/viewUser" state={profile}>
            
            
            <li className="vertical-scroll" key={profile._id}>{profile.name}</li> 
 
            
            
          </Link>
          <form action=""  >
         
          <button onClick={handleClick} >
          <li  className="assign-click" >Assign</li>


          </button>

          </form>
          
            </div>
            
          )
           
        }         
        )}
        </div>
        
      :
        <p>An error occured</p>
      }


      <div>
        <h4>Select a team to Assign</h4>
        <select 
          name="team"
         
        >
           <option
            
            value='none'
          >
            Select an option
          </option>
         
          <option
            name="frontend"
            value='frontend'
          >
            High-Prority
          </option>
          <option 
            name="backend"
            value='Medium'
          >
          Medium-Priority
          </option>
          <option
            name="fullstack" 
            value='Low'
          >
            Low-Priority
          </option>
        </select>


      </div>

      <div >
<h1>List of users assigned profile</h1>


      </div>
      
    </div>
  );
}

export default Users;