import React from 'react'
import AllTicketsComp from '../../components/AllTickets/AllTickets-component'
import "./AllTickets.css"

const AllTickets = (props) => {


  return (
    <div className="tickets-index">
      <h2>All Tickets:</h2>
      <AllTicketsComp tickets={props.ticket}/>

      
    </div>
  )
}

export default AllTickets
