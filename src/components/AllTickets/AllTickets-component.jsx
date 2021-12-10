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
      <div className="container-s">
        {tickets.map(ticket => {
          return (
            <div className="card-outline">
              <div className="card-holder">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title"><strong>{ticket.title}</strong></h1>
                    <p>Priority: {ticket.priority}</p>
                    <h6 className="card-subtitle mb-2 text-muted">status: {ticket.status}</h6>
                    <p className="card-text"> Description: {ticket.description.substring(0, 40)}...</p>
                    <Link
                      to="/ticketdetails" className="card-link position-absolute bottom-0 start-0" state={ticket}>
                      <button className="btn btn-primary text-center "> Details </button>
                    </Link>
                    <p className="text-right text-submittedBy"> <b>{ticket.submittedBy.name}</b></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }</div>
    );
  }
}







export default AllTicketsComp;

