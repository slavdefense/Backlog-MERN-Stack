import React from 'react';
import "./Graph.css"
const Graph = ({graphAllTickets}) => {

  const maxValue = graphAllTickets.length
  let totalLow = 0
  let totalMedium = 0
  let totalHigh = 0

  for(let item of graphAllTickets){
    if(item.priority==='Low'){
      totalLow++
    }
    else if(item.priority==="Medium"){
      totalMedium++
    }
    else if(item.priority==="High")
    totalHigh++

  }

  let totalLowPercentage = Math.floor((totalLow/maxValue)*100)
  let totalMediumPercentage = Math.floor((totalMedium/maxValue)*100)
  let totalHighPercentage = Math.floor((totalHigh/maxValue)*100)
  
  // console.log(total)
console.log(totalLowPercentage)
console.log(totalMediumPercentage)
console.log(totalHighPercentage)

  return ( 
    <div className="graphs">

    



    <div className="priority-bar">
      <label className="sp" htmlFor="low">Low {totalLow}</label>
      <div id="low" className="priority-bar-fill" style={{'height':`${totalLowPercentage}%`}}>
      </div>
      
    </div>
    <div className="priority-bar">
      <label htmlFor="medium">Medium {totalMedium}</label>
      <div id="medium" className="priority-bar-fill" style={{'height':`${totalMediumPercentage}%`}}>
      </div>

    </div>
    <div className="priority-bar">
      <label className="sp" htmlFor="high">High {totalHigh}</label>
      <div id="high" className="priority-bar-fill" style={{'height':`${totalHighPercentage}%`}}>
      </div>
      

    </div>
   
    <div className="circle">


    </div>

   
    </div>
    
   );
}
 
export default Graph;