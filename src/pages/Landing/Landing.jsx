import React,{useState,useEffect} from 'react';

import styles from './Landing.module.css'
import Graph from './Graph';

const Landing = ({user,allTickets,allProfiles}) => {
  const [graphAllTickets,setgraphAllTickets] = useState(allTickets)

  useEffect(()=>{
    setgraphAllTickets(allTickets)
  },[])

  return (
    <main className={styles.container}>
      <br />
      <br /><br />
      <h1> Lets Track Bugs!</h1>
      {/* <br /><br /> */}
    <Graph graphAllTickets={allTickets} user={user} allProfiles={allProfiles}/>
    </main>
  )
}

export default Landing