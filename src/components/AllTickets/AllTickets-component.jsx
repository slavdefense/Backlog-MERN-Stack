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
          return (

            <div class="card">
              <div class="card-body">
                <h5 class="card-title" class="text-center"><strong>{ticket.title}</strong> <p class="text-center">Priority: {ticket.priority}</p></h5>
                <h6 class="card-subtitle mb-2 text-muted">status: {ticket.status}</h6>
                <p class="card-text"> Description: {ticket.description}</p>

                <Link
                  to="/ticketdetails" class="card-link" state={ticket}>
                  <button class="btn btn-primary"> Details </button>
                </Link>
                <p className="text-right">by: {ticket.submittedBy.name}</p>
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

