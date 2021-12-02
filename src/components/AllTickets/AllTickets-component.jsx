import React from 'react';
import { Link } from 'react-router-dom';



const AllTicketsComp = ({tickets}) => {
  

  return ( 
    <div className="container">
    {tickets.map((ticket)=>{
      return(
        

<table className="table">
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Related Links</th>
    <th>Status</th>
    <th>Priority</th>
    <th>Submitted By</th>
  </tr>
  <tr>
    <td>{ticket.title}</td>
    <td>{ticket.description}</td>
    <td>{ticket.relatedLink}</td>
    <td>{ticket.status}</td>
    <td>{ticket.priority}</td>
    <td>{ticket.submittedBy}</td>
  </tr>
  
</table>





      )
     
      

    })}
    
   
    

    </div>
  );
}




 
export default AllTicketsComp;

