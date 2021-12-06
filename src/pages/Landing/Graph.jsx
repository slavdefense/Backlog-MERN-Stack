import React, {useState,useEffect} from 'react';
import "./Graph.css"


const Graph = ({graphAllTickets}) => {
  

// const [ticketDaysValue,setTicketDaysValue] = useState()

// useEffect(()=>{
//   setTicketDaysValue(setTicketDaysValue)
// },[graphAllTickets])
// console.log(graphAllTickets[0].createdAt)

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
// console.log(totalLowPercentage)
// console.log(totalMediumPercentage)
// console.log(totalHighPercentage)



const days = [
  {day:'Sunday',value:0},
  {day:'Monday',value:0},
  {day:'Tuesday',value:0},
  {day:'Wednesday',value:0},
  {day:'Thursday',value:0},
  {day:'Friday',value:0},
  {day:'Saturday',value:0},
  
]
// console.log(graphAllTickets[0].createdAt)
if(graphAllTickets){
  for(let i=0;i<graphAllTickets.length;i++){
    if(new Date(graphAllTickets[i].createdAt).getDay()===0){
      days[0].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===1){
      days[1].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===2){
      days[2].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===3){
      days[3].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===4){
      days[4].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===5){
      days[5].value++
    }
    if(new Date(graphAllTickets[i].createdAt).getDay()===6){
      days[6].value++
    }
   
  }



}

let sumDayVal = 0
for(let item of days){
  sumDayVal=sumDayVal+item.value
}

console.log(sumDayVal)




  return ( 
    <section>
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


<div className="days-of-the-week">
  

  <div className="days">
  <label className="sp" htmlFor="low">Sunday </label>
    <div className="days-inner" style={{'height':`${days[0].value}%`}} ></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Monday </label>
    <div className="days-inner"style={{'height': `calc(100% ${days[1].value}/${sumDayVal}`}}></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Tuesday </label>
    <div className="days-inner"style={{'height':`${days[2].value}%`}}></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Wednesday </label>
    <div className="days-inner"style={{'height':`${days[3].value}%`}}></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Thursday </label>
    <div className="days-inner"style={{'height':`${days[4].value}%`}}></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Friday </label>
    <div className="days-inner"style={{'height':`${days[5].value}%`}}></div>
  </div>
  <div className="days">
  <label className="sp" htmlFor="low">Saturday </label>
    <div className="days-inner"style={{'height':`${days[6].value}%`}}></div>
  </div>
  
  

</div>


    </section>
    
    
    
   );
}
 
export default Graph;