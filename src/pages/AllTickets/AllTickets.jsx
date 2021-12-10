import React from 'react'
import AllTicketsComp from '../../components/AllTickets/AllTickets-component'
import Search from '../../components/Search/Search'
import "./AllTickets.css"

const AllTickets = (props) => {
  return (
    <div className="all-tickets">
      <div className="search-area">
        <Search allTickets={props.ticket} />
      </div>
      <div className="tickets-index">
        <AllTicketsComp tickets={props.ticket} />
      </div>
    </div>
  )
}

export default AllTickets