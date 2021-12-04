import React from 'react';
import "./Graph.css"
const Graph = ({graphAllTickets}) => {
  return ( 
    <div>
      <h2>Hello This is Graph Page</h2>
      {
        graphAllTickets?


        <div>

{graphAllTickets.map((item)=>{
          return(
            <span>{item.priority}</span>
  
  
          )
         
        })
  
        }
        </div>
        
        :''


      }
    </div>
    
   );
}
 
export default Graph;