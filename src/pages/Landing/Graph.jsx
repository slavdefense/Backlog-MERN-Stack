import React from 'react';
import "./Graph.css"
const Graph = ({graphAllTickets}) => {




  return ( 
    <div className="graphs">
    <div className="priority-bar">
      <label htmlFor="low">Low</label>
      <div id="low" className="priority-bar-fill" style={{'height':'80%'}}>
      </div>

    </div>
    <div className="priority-bar">
      <label htmlFor="medium">Medium</label>
      <div id="medium" className="priority-bar-fill" style={{'height':'80%'}}>
      </div>

    </div>
    <div className="priority-bar">
      <label htmlFor="high">High</label>
      <div id="high" className="priority-bar-fill" style={{'height':'80%'}}>
      </div>

    </div>
   
    </div>
    
   );
}
 
export default Graph;