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
          <h1>Hello, {profile.name}</h1>
          <h3>Your tickets</h3>
          {profile && profile.ticketsAssigned.map((ticket) => {
            return (
              <>
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
          <h3>Tickets you've submitted:</h3>
          {profile && profile.ticketsSubmitted.map((ticket) => {
            return (
              <>
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