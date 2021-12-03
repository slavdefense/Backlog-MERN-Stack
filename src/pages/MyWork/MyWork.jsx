import './MyWork.css'
import React from 'react'

const MyWork = props => {
  const profile = props.profile
  if (props.profile === undefined) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        <div className="myWork">
          <h1>Hello, {props.user.name}</h1>
          {profile.profile && profile.profile.tickets.map((ticket) => {
            return (
              <>
                <h3>Your tickets</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{ticket.title}</td>
                      <td>{ticket.description}</td>
                      <td>{ticket.status}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          })
          }
        </div>
      </>
    );
  }
}
export default MyWork;