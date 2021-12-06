import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './UserView.css'

const UserView = (props) => {
  let location = useLocation()
  console.log(location.state.ticketsAssigned)

  return (
    <>
      <div className="user-view">
        <h1>{location.state.name}</h1>
        {location.state.ticketsAssigned.length !== 0 ? 
        <>
        <h3>Tickets Assigned</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {location.state.ticketsAssigned.map(ticket => {
              return (
                <>
                  <tr>
                    <Link to="/ticketDetails" state={ticket}>
                      <td>{ticket.title}</td>
                    </Link>
                    <td>{ticket.description}</td>
                    <td>{ticket.status}</td>
                  </tr>
                </>
              )
            }
            )}
          </tbody>
        </table>
        </>
        : <br />}
        {location.state.ticketsSubmitted.length !== 0 ? 
        <>
        <h3>Tickets Submitted</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {location.state.ticketsSubmitted.map(ticket => {
              return (
                <>
                  <tr>
                    <Link to="/ticketDetails" state={ticket}>
                      <td>{ticket.title}</td>
                    </Link>
                    <td>{ticket.description}</td>
                    <td>{ticket.status}</td>
                  </tr>
                </>
              )
            }
            )}
          </tbody>
        </table>
        </>
        : <br />}
      </div>
    </>
  );
}

export default UserView;