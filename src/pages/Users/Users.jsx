import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

//in the profile model there is a team which is embedded to team schema
//the team has a 1) name: string and 2) members: Profile reference


const Users = (props) => {

  const [profiles, setProfiles] = useState([])
  const [newProfiles,setNewProfiles] = useState()

  const [assignTask,setAssignTask]= useState()
  // console.log(profiles)
  const [priorityTeam,setPriorityTeam]=useState(
    {
      priority:''
    }
  )
 


  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const submitHandler=(evt)=>{
   evt.preventDefault()
   setProfiles(newProfiles)
  //  console.log(profiles)
  

  }

  const handlePriorityChange = (evt)=>{
    // console.log(evt.target.value)
    setPriorityTeam({...priorityTeam,[evt.target.name]:evt.target.value})

    // console.log(priorityTeam)
  }
  const submitPriorityHandler=(evt)=>{
    evt.preventDefault()
  }


  const handleChange=(evt)=>{

   const namesAssigned = profiles.filter((item)=>{
     return item.name=== evt.target.value

   })
   setAssignTask(namesAssigned)
 
   
  
   //logs the person that was assigned
   

    // console.log(evt.target.value)
    const newestProfiles = profiles.filter((item)=>{
      // console.log(item.name)
      
      return item.name!==evt.target.value
      
    })
    setNewProfiles(newestProfiles)
    // console.log(newestProfiles)
    // console.log(assignTask)
  }
// console.log(priorityTeam)
  //if priorityTeam.priority = 'high' then person assigned goes to high
  //if priorityTeam.priority = 'medium' then person assigned goes to medium
  //if priorityTeam.priority = 'low' then person assigned goes to low
  
console.log(assignTask)


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

        <form action="" onSubmit={submitPriorityHandler}>
        <select 
          
          onChange={handlePriorityChange}
          name="priority"
        >
           <option
            
            value='none'
          >
            Select an option
          </option>
         
          <option
            name="high"
            value='high'
          >
            High-Prority
          </option>
          <option 
            name="medium"
            value='medium'
          >
          Medium-Priority
          </option>
          <option
            name="low" 
            value='low'
          >
            Low-Priority
          </option>
        </select>

      <button type="submit">Select</button>


        </form>
        


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
              <button>Assign</button>
            </form>
      </div>
      
      <div>

<h1>hello this is table page</h1>
<table className="table">
              

  <tr>
    <td>Low Priority</td>



    {assignTask&&priorityTeam&&priorityTeam.priority==="low"?
     
    
      <th>{assignTask[0].name}</th>
          
        
        
 
:''

    }
   
    
    
  </tr>
  <tr>
    <td>Medium priority</td>
    

    {assignTask&&priorityTeam&&priorityTeam.priority==="medium"?
     
    
      <th>{assignTask[0].name}</th>
          
        
        
 
:''

    }
  </tr>
  <tr>
    <th>High Priority</th>




    {assignTask&&priorityTeam&&priorityTeam.priority==="high"?
     
    
      <th>{assignTask[0].name}</th>
          
        
        
 
:''

    }
  
    
    <th></th>
  </tr>




            </table>


      </div>
    </div>
  );
}

export default Users;