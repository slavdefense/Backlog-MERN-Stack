import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import './User.css'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

  return (
    <div className="User-List">
      <h1>Hello.  This is a list of all the users.</h1>
      {users.length ? 
      <>
        {users.map(user=>
          <p key={user._id}>{user.name}</p>
        )}
      </>
      :
        <p>An error occured</p>
      }
    </div>
  );
}
 
export default Users;