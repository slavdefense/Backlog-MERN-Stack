import React from 'react'
import AllTicketsComp from '../../components/AllTickets/AllTickets-component'
import Search from '../../components/Search/Search'
import "./AllTickets.css"

const AllTickets = (props) => {
  return (
    <div className="all-tickets">

        <Search allTickets={props.ticket} />
     
      <div className="tickets-index">
        
        <AllTicketsComp tickets={props.ticket} />
        
      </div>
    </div>
  )
}

export default AllTickets