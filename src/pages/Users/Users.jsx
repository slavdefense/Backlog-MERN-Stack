import React, { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService'
import './User.css'
import { Link } from 'react-router-dom'

const Users = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <div className="user-list container">
      <h1>Hello.  This is a list of all the users.</h1>
      {profiles.length ? 
      <>
        {profiles.map(profile=>
          <Link to="/viewUser" state={profile}>
          <p key={profile._id}>{profile.name}</p>
          </Link>
        )}
      </>
      :
        <p>An error occured</p>
      }
    </div>
  );
}

export default Users;