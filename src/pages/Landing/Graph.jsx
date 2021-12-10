import React, {useState,useEffect} from 'react';
import CircleChart from './Circle.jsx';

import "./Graph.css"


const Graph = ({graphAllTickets,user,allProfiles}) => {
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
  
  const days = [
    {day:'Sunday',value:0},
    {day:'Monday',value:0},
    {day:'Tuesday',value:0},
    {day:'Wednesday',value:0},
    {day:'Thursday',value:0},
    {day:'Friday',value:0},
    {day:'Saturday',value:0}, 
               ]

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
let week =[{value:0},{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}]

for (let i=0;i<week.length;i++){
  week[i].value += (days[i].value/sumDayVal)*100 
}

for(let item of week){
  console.log(item.value)
}

  return ( 
    <section>
      <h3>Tickets vs Priority  </h3> 
      <h3 id="user-vs-ticket-heading">User vs Tickets</h3> 
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
              <CircleChart pieAllTickets={graphAllTickets} user={user} allProfiles={allProfiles}> </CircleChart>
        </div>
        <br/>
        
        <h3>Days vs Tickets </h3>
  <div className="days-of-the-week">
        <div className="days">
        <label className="sp" htmlFor="low">Sunday: {days[0].value}</label>
          <div className="days-inner" style={{'height':`${week[0].value}%`}} ></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Monday: {days[1].value} </label>
          <div className="days-inner"style={{'height': `${week[1].value}%`}}></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Tuesday: {days[2].value} </label>
          <div className="days-inner"style={{'height':`${week[2].value}%`}}></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Wednes: {days[3].value} </label>
          <div className="days-inner"style={{'height':`${week[3].value}%`}}></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Thursday: {days[4].value} </label>
          <div className="days-inner"style={{'height':`${week[4].value}%`}}></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Friday: {days[5].value} </label>
          <div className="days-inner"style={{'height':`${week[5].value}%`}}></div>
        </div>
        <div className="days">
        <label className="sp" htmlFor="low">Saturday: {days[6].value} </label>
          <div className="days-inner"style={{'height':`${week[6].value}%`}}></div>
        </div>
  </div>

</section>  
   );
}
 
export default Graph;