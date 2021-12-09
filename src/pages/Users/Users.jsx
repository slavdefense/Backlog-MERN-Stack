import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

//in the profile model there is a team which is embedded to team schema
//the team has a 1) name: string and 2) members: Profile reference

const Users = (props) => {
  let allProfiles = props.allProfiles
  // on load (because of useeffect, profiles are set too all profiles)
  const [profiles, setProfiles] = useState([''])
  // const [newProfiles, setNewProfiles] = useState()
  const [priorityTeam, setPriorityTeam] = useState(
    {
      priority: '',
      profileId: ''
    }
  )

  // on submit we want to rerender the table below
  // meaning we should change priorities then
  // need to call use effect to get all teams again for this to work?

  useEffect(() => {
    profileService.getAllProfiles()
      // all profiles won't be set until after this useEffect finishes firing
      .then(profiles => setProfiles(profiles))
  }, [allProfiles])


  const handlePriorityChange = (evt) => {
    setPriorityTeam({
      ...priorityTeam,
      [evt.target.name]: evt.target.value
    })
  }

  const submitTeam = (evt) => {
    evt.preventDefault()
    // on submit -> send the team data to the profile in assignee and send the assignee data to the team 
    props.handleAddTeam(priorityTeam)
  }
  // if any of profiles => profile.team.length exists, load the page
  // if not, wait 
  return (
    <div className="user-list container">
      <h1>Greetings {props.user.name}. ({props.user.email}) </h1>
      <h4>{!props.user.isAdmin ? 'Not an admin' : 'Is an Admin'} </h4>
      {profiles.length ?
        <div id="cont-d">
          {profiles.map((profile) => {
            return (
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
        <form action="" onSubmit={submitTeam}>
          <select
            onChange={handlePriorityChange}
            name="priority"
          >
            <option>
              Select an option
            </option>
            <option
              name="priority"
              value='high'
            >
              High-Prority
            </option>
            <option
              name="priority"
              value='medium'
            >
              Medium-Priority
            </option>
            <option
              name="priority"
              value='low'
            >
              Low-Priority
            </option>
          </select>
          <h4>Assign User</h4>
          <select
            name="profileId"
            onChange={handlePriorityChange}
          >
            <option
              value=''
            >
              Select an option
            </option>
            {
              profiles.map(item => {
                return (
                  <option
                    key={item._id}
                    name="profileId"
                    value={item._id}
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
            <th>High Priority</th>
            {allProfiles.map(profile => {
              if (profile.team.length && profile.team[0].name === 'high') {
                return (
                  <td>{profile.name}</td>
                )
              }
            })
            }
          </tr>
          <tr>
            <th>Medium priority</th>
            {allProfiles.map(profile => {
              if (profile.team.length && profile.team[0].name === 'medium') {
                return (
                  <td>{profile.name}</td>
                )
              }
            })
            }
          </tr>
          <tr>
            <th>Low Priority</th>
            {allProfiles.map(profile => {
              if (profile.team.length && profile.team[0].name === 'low') {
                return (
                  <td>{profile.name}</td>
                )
              }
            })
            }
          </tr>
        </table>
      </div>
    </div>
  );
}


export default Users;