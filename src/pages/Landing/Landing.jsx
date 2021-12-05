import React,{useState,useEffect} from 'react';

import styles from './Landing.module.css'
import Graph from './Graph';

const Landing = ({user,allTickets}) => {

  

  const [graphAllTickets,setgraphAllTickets] =useState(allTickets)

  useEffect(()=>{
    setgraphAllTickets(allTickets)
  },[])

 

  
  return (
    <main className={styles.container}>
      <h1>
        Hi, {user ? user.name : "Friend"} Lets Track  Errors.We Love you!
      </h1>
      
      {/* {console.log(graphAllTickets)} */}

      
    {/* <Graph graphAllTickets={graphAllTickets}/> */}
    <Graph graphAllTickets={allTickets}/>
     

    </main>
  )
}

export default Landing