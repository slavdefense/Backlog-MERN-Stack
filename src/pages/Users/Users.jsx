import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

//in the profile model there is a team which is embedded to team schema
//the team has a 1) name: string and 2) members: Profile reference

const Users = (props) => {
  let allProfiles = props.allProfiles
  // on load (because of useeffect, profiles are set too all profiles), this happens before the useEffect runs
  const [profiles, setProfiles] = useState([''])
  const [priorityTeam, setPriorityTeam] = useState(
    {
      priority: '',
      profileId: ''
    }
  )

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

  const isFormInvalid = () => {
    return !(priority && profileId)
  }

  const { priority, profileId } = priorityTeam

  return (
    <div className="conti">
      <h1>Users</h1>
      {/* <h4>{!props.user.isAdmin ? 'Not an admin' : 'Is an Admin'} </h4> */}
      {profiles.length ?
        <>
          <div id="cont-d">
            {profiles.map((profile) => {
              return (
                <div className="assign">
                  <Link to="/viewUser" state={profile}>
                    <li className="vertical-scroll" key={profile._id}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-file-person" viewBox="0 0 16 16">
                      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg> 
                      {profile.name}
                    </li>
                  </Link>
                </div>
              )
            }
            )}
          </div>
        </>
        :
        <p>An error occured</p>
      }
      <br /><br />
      <div>
        <h3>Assign users to a team</h3>
        <h4>Team to assign</h4>
        <form action="" onSubmit={submitTeam}>
          <select
            onChange={handlePriorityChange}
            name="priority"
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option
              selected
            >
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
            className="form-select"
            multiple aria-label="multiple select example"
            id="form-select-multiple"
          >
            <option
              selected
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
          <br />
          <button disabled={isFormInvalid()} className="btn btn-success">Assign</button>
        </form>
      </div>
      <br />
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