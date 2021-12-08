import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

//in the profile model there is a team which is embedded to team schema
//the team has a 1) name: string and 2) members: Profile reference


const Users = (props) => {

  const [profiles, setProfiles] = useState([])
  const [newProfiles,setNewProfiles] = useState()
  // console.log(profiles)

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const submitHandler=(evt)=>{
   evt.preventDefault()
   setProfiles(newProfiles)
  //  console.log(profiles)

  }
  const handleChange=(evt)=>{
   //get profile
   //get the name 
   //delete the name from the profile
   //setProfiles()
  
  console.log(evt.target.value)
    const newestProfiles = profiles.filter((item)=>{
      console.log(item.name)
      
      return item.name!==evt.target.value
      
    })
    setNewProfiles(newestProfiles)
    console.log(newestProfiles)

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
              <form action="" onSubmit={submitHandler}  >
                <select name="" id="" onChange={handleChange}>
                  {
                    profiles.map((item)=>{
                        return(

                        <option 
                        key={item._id}
                        value={item.name}
                        name={item.name}
                        
                        
                        >
                       {item.name}
                        </option>
                  )
                  
                    })
                  }
              </select>
              <button>Submit</button>
            </form>
      </div>
      
      <div>

<h1>hello this is table page</h1>
<table className="table">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Related Links</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Submitted By</th>
                <th>Location</th>
              </tr>
              <tr>
              
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>


      </div>
    </div>
  );
}

export default Users;