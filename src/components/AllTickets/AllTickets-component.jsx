import React from 'react';
import { Link } from 'react-router-dom';
import TicketView from '../../pages/TicketView/TicketView';
import './AllTickets-component.css'

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

            <div className="card">
              <div className="card-body">
                <h5 className="card-title" className="text-center"><strong>{ticket.title}</strong> <p className="text-center">Priority: {ticket.priority}</p></h5>
                <h6 className="card-subtitle mb-2 text-muted">status: {ticket.status}</h6>
                <p className="card-text"> Description: {ticket.description}</p>

                <Link
                  to="/ticketdetails" className="card-link" state={ticket}>
                  <button className="btn btn-primary"> Details </button>
                </Link>
                <p className="text-right">by: {ticket.submittedBy.name}</p>
              </div>
            </div>
          )
        })
        }</div>
    );
  }
}







export default AllTicketsComp;

