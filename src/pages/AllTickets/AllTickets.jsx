import React from 'react';


const AllTickets = (props) => {
  return ( 
    <div className="container">
    <h1>This is the page to display all tickets</h1>
      {props.tickets.map(ticket => 
        <div>
          <p> {ticket.title} </p>
          <p> {ticket.description} </p>
          <p> {ticket.priority} </p>
          <p> {ticket.startDate} </p>
          <p> {ticket.completedDate} </p>
          <p> {ticket.status} </p>

        </div>
        
        )}
    </div>

  );
}

export default AllTickets;
