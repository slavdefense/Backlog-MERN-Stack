import React from 'react';
import { Link } from 'react-router-dom';
import TicketView from '../../pages/TicketView/TicketView';

const AllTicketsComp = ({ tickets }) => {
  if (tickets === undefined) {
    return (
      <>
      </>
    )
  } else {
  return (
    <div className="container">
      {tickets.map(ticket => {
        return(
            <table className="table">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Related Links</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Submitted By</th>
                <th>Location</th>
              </tr>
              <tr>
                <Link to="/ticketDetails" state={ticket}>
                  <td>{ticket.title}</td>
                </Link>
                <td>{ticket.description}</td>
                <td>{ticket.relatedLink}</td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.submittedBy.name}</td>
                <td>{ticket.officeLocation}</td>
              </tr>
            </table>
        )
      })
    }</div> 
  );
}
}

export default AllTicketsComp;

