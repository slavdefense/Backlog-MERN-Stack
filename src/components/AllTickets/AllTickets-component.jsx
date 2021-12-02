import React from 'react';


const AllTickets = ({ticket}) => {
  

  return ( 
    <div className="container">
    {ticket.map((ticket)=>{
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
 
export default AllTickets;