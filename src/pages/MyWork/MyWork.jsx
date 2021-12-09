import './MyWork.css'
import React from 'react'
import { Link } from 'react-router-dom'

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
          <h1>Hey, {profile.name.toUpperCase()}</h1>
          <h3>Your Tickets</h3>
          {profile && profile.ticketsAssigned.map((ticket) => {
            return (
              <>
                <table className="table">
                  <thead>
                    <tr className="title-color">
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Link  to="/ticketDetails" state={ticket}>
                        <td className="link-border">{ticket.title}</td>
                        
                      </Link>
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
                    <tr className="title-color">
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <Link to="/ticketDetails" state={ticket}>
                        <td className="link-border">{ticket.title}</td>
                      </Link>                      <td>{ticket.description}</td>
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