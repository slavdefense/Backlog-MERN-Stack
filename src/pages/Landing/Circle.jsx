import React,{useState,useEffect,PureComponent} from 'react';
import "./Circle.css"
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const CircleChart = ({pieAllTickets,user,allProfiles}) => {
const [tickets,setTickets] = useState(pieAllTickets)
const data01 = allProfiles.map((item)=>{
  return JSON.parse(`{"name": "${item.name}", "value": ${item.ticketsAssigned.length}}`)
})
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