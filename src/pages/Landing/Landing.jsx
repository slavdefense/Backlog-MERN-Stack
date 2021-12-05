import React,{useState,useEffect} from 'react';

import styles from './Landing.module.css'
import Graph from './Graph';

const Landing = ({user,allTickets}) => {

  const [graphAllTickets,setgraphAllTickets] =useState()

  useEffect(()=>{
    setgraphAllTickets(allTickets)
  },[])


  console.log(graphAllTickets)
  return (
    <main className={styles.container}>
      <h1>
        Ke paso amigo, {user ? user.name : "Friend"} Help us Solve some Erors
      </h1>
      <h1>3 Graphs</h1>

      
    <Graph graphAllTickets={graphAllTickets}/>
     

    </main>
  )
}

export default Landing