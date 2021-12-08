import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

//in the profile model there is a team which is embedded to team schema
//the team has a 1) name: string and 2) members: Profile reference


const Users = (props) => {

  const [profiles, setProfiles] = useState(['admin'])
  const [newProfiles,setNewProfiles] = useState()
  const [assignTask,setAssignTask]= useState()
  const [priorityTeam,setPriorityTeam]=useState(
    {
      priority:''
    }
  )
  const [highTeam,setHightTeam]=useState(['admin'])
  const [mediumTeam,setmediumTeam]=useState(['admin'])
  const [lowTeam,setLowTeam]=useState(['admin'])
 
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const submitHandler=(evt)=>{
   evt.preventDefault()
   setProfiles(newProfiles)
  
  }

  const handlePriorityChange = (evt)=>{
    setPriorityTeam({...priorityTeam,[evt.target.name]:evt.target.value})
  }
  const submitPriorityHandler=(evt)=>{
    evt.preventDefault()
  }

  const handleChange=(evt)=>{
   

      const namesAssigned = profiles.filter((item)=>{
          return item.name=== evt.target.value
           })
   //priorityTeam.priority==="medium"
   if(priorityTeam.priority==='high'){
     console.log(namesAssigned)
     let high = [...highTeam,namesAssigned[0].name]
     console.log(high)
     
     setHightTeam(high)
     console.log(highTeam)
    }
    else if(priorityTeam.priority==='medium'){
      let medium = [...mediumTeam,namesAssigned[0].name]
      setmediumTeam(medium)
    }
    else{
      let low = [...lowTeam,namesAssigned[0].name]
      setLowTeam(low)
    }


   setAssignTask(namesAssigned)
    const newestProfiles = profiles.filter((item)=>{ 
      return item.name!==evt.target.value
      
    })
    setNewProfiles(newestProfiles)  
  }


  
  return (
    <div className="user-list container">
      <h1>Greetings {props.user.name}  {props.user.email} </h1>
      <h4>  {!props.user.isAdmin? 'Not an admin':'Is an Admin'} </h4>

  
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
        <h4>Team to assign</h4>

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
              <h4>Assign User</h4>
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

<h2>Teams</h2>
<table className="table">
              

  <tr>
    <td>Low Priority</td>



    {assignTask&&priorityTeam&&priorityTeam.priority==="low"?
      <th>{assignTask[0].name}</th>
:''

    }  
    {lowTeam.map((item)=>{
      return  <th>{item}</th>
    })

    }
    
  </tr>
  <tr>
    <td>Medium priority</td>
    

    {assignTask&&priorityTeam&&priorityTeam.priority==="medium"? 
      <th>{assignTask[0].name}</th>
          
:''

    }
    {mediumTeam.map((item)=>{
      return  <th>{item}</th>
    })

    }
  </tr>
  <tr>
    <th>High Priority</th>

    {assignTask&&priorityTeam&&priorityTeam.priority==="high"?
      <th>{assignTask[0].name}</th>
          
:''

    }
  
    {highTeam.map((item)=>{
      return  <th>{item}</th>
    })

    }
   
  </tr>

            </table>


      </div>
    </div>
  );
}

export default Users;