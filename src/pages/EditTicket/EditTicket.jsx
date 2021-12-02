import { useLocation } from "react-router-dom";
import React, { useState } from 'react'

import './EditTicket.css'


const EditTicket = () => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state)

  return ( 
    <div className="edit-view">
      <h1>Edit Ticket:  </h1>
    </div>
   );
}

export default EditTicket;
