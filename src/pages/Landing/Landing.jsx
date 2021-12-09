import React,{useState,useEffect} from 'react';

import styles from './Landing.module.css'
import Graph from './Graph';

const Landing = ({user,allTickets,allProfiles}) => {

  

  const [graphAllTickets,setgraphAllTickets] =useState(allTickets)

  useEffect(()=>{
    setgraphAllTickets(allTickets)
  },[])

  return (
    <main className={styles.container}>
      <h1>
        Backlog Welcomes {user ? user.name : "Friend"} 
      </h1>
      <h6>Lets Track Bugs!</h6>
      
      {/* {console.log(graphAllTickets)} */}

      
    {/* <Graph graphAllTickets={graphAllTickets}/> */}
    <Graph graphAllTickets={allTickets} user={user} allProfiles={allProfiles}/>
     

    </main>
  )
}

export default Landing