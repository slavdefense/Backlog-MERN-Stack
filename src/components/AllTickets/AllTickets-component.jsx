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

          <div class="card">
  <div class="card-body">
    <h5 class="card-title">{ticket.title} <span id="priority">Priority: {ticket.priority}</span></h5>
    <h6 class="card-subtitle mb-2 text-muted">Priority: {ticket.priority}</h6>
    <p class="card-text"> Description: {ticket.description}</p>
    <Link to="/ticketdetails" class="card-link" state={ticket}>Details</Link>
  </div>
</div>
            // <table className="table">
            //   <tr>
            //     <th>Title</th>
            //     <th>Description</th>
            //     <th>Status</th>
            //     <th>Priority</th>
            //     <th>Submitted By</th>
            //   </tr>
            //   <tr>
              
            //       <td>{ticket.title}</td>
            //     <td>{ticket.description}</td>
            //     <td>{ticket.status}</td>
            //     <td>{ticket.priority}</td>
            //     <td>{ticket.submittedBy.name}</td>
            //   </tr>
            // </table>
        )
      })
    }</div> 
  );
}
}

export default AllTicketsComp;

