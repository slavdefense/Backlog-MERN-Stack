import React,{useState,useEffect,PureComponent} from 'react';
import "./Circle.css"
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const CircleChart = ({pieAllTickets,user,allProfiles}) => {



const [tickets,setTickets] = useState(pieAllTickets)
// const [pieData,setPieData] =useState()

// console.log(tickets[0].createdAt.slice(0,3))


// const data01 = pieAllTickets.map((item)=>{


  
//   return JSON.parse(`{"name": "${item.assignedTo.name}", "value": ${item.createdAt.slice(0,3)}}`)
// })

const data01 = allProfiles.map((item)=>{


  
  return JSON.parse(`{"name": "${item.name}", "value": ${item.ticketsAssigned.length}}`)
})


console.log(data01)
// useEffect(() => {
//   return () => {
//     setTickets(data01)
//     // setPieData(data01)
//   }
// },[])



  return (

    
      <PieChart width={500} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>

    );
}
 
export default CircleChart 