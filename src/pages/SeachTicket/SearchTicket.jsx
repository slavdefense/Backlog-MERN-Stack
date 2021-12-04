import React,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

import "./SearchTicket.css"


const SearchTicket = ({allTickets}) => {
  const [searchTickets,setSearchTickets]=useState()
  const [filteredTicket,setFilteredTicket]=useState() 
  const [formData,setFormData]= useState({
    title:'',
    priority:'',
    date1:'',
    date2:''
  })

  useEffect(()=>{
    setSearchTickets(allTickets)
  },[])
 
  const handleChange =(evt)=>{
    setFormData({...formData,[evt.target.name]:evt.target.value})
  }
 
  const handleSubmit=(evt)=>{
    evt.preventDefault()
   console.log(searchTickets)

    const filteredData = searchTickets.filter((item)=>{
      return item.priority===formData.priority||item.title===formData.title
    })
   setFilteredTicket(filteredData)  
    }
    
  return ( 
   
    <div className="search-view">
          
      <h1>Use any fields</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="title" placeholder="search"/>
        <input type="date" onChange={handleChange} name="date1" id="" value="date" />
        <input type="date" onChange={handleChange} name="date2" id=""
        value="date" />
        <select onChange={handleChange}
          name="priority"
         
        >
          <option
            name="priority"
            value='High'
          >
            High
          </option>
          <option 
            name="priority"
            value='Medium'
          >
            Medium
          </option>
          <option
            name="priority" 
            value='Low'
          >
            Low
          </option>
        </select>
        <button>Submit</button>
      </form>

      {
        filteredTicket?
        <div>{
          filteredTicket.map((item)=>{
            return(
              <table className="table">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Related Links</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Submitted By</th>
              </tr>
              <tr>
                {/* <Link to="/ticketDetails" state={ticket}>
                  <td>{ticket.title}</td>
                </Link> */}
                <td>{item.description}</td>
                <td>{item.relatedLink}</td>
                <td>{item.status}</td>
                <td>{item.priority}</td>
                <td>{item.submittedBy.name}</td>
              </tr>
            </table>
              
            )
            
          })   
        }</div>
  
        : ''
      }

    </div>
   );
}
 
export default SearchTicket;