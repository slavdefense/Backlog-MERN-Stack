import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import "./SearchTicket.css"


const SearchTicket = (props) => {
  return (
    <div>
      <Search allTickets={props.allTickets} />
    </div>
  );
}

export default SearchTicket;