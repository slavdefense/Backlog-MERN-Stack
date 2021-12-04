import React,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

import "./SearchTicket.css"


const SearchTicket = ({allTickets}) => {
  const [searchTickets,setSearchTickets]=useState()
  const [filteredTicket,setFilteredTicket]=useState() 
  const [formData,setFormData]= useState({
    title:'',
    priority:'',
    date1:'2021-12-03',
    date2:'2021-12-07'
  })

  // const date1 = formData.date1.split('-')
  // console.log(date1)

  const formDate =new Date(formData.date1.split('-')[0],parseInt(formData.date1.split('-')[1])-1,formData.date1.split('-')[2])
  console.log(formDate)

  const formDate2 =new Date(formData.date2.split('-')[0],parseInt(formData.date2.split('-')[1])-1,formData.date2.split('-')[2])
  console.log(formDate2)
  console.log(formDate<formDate2)
  // const formDate2 =new Date(formData.date2.split('-')[2],parseInt(formData.date2.split('-')[1])-1,formData.date2.split('-')[0])
  // console.log(formDate2)

  // console.log(formData.date1)
  // console.log(formData.date2)
  // console.log(searchTickets[0].createdAt.slice(0,10))
  useEffect(()=>{
    setSearchTickets(allTickets)
  },[])
 
  const handleChange =(evt)=>{
    setFormData({...formData,[evt.target.name]:evt.target.value})
  }
 
  const handleSubmit=(evt)=>{
    evt.preventDefault()
  //  console.log(searchTickets)

    const filteredData = searchTickets.filter((item)=>{
      return item.priority===formData.priority||item.title===formData.title||(new Date(item.createdAt.slice(0,10).split('-')[0],parseInt(item.createdAt.slice(0,10).split('-')[1])-1,item.createdAt.slice(0,10).split('-')[2])>formDate &&new Date(item.createdAt.slice(0,10).split('-')[0],parseInt(item.createdAt.slice(0,10).split('-')[1])-1,item.createdAt.slice(0,10).split('-')[2])<formDate2)
    })
   setFilteredTicket(filteredData)  
    }
    
  return ( 
   
    <div className="search-view">
          
      <h1>Use any fields</h1>

      <form action="" onSubmit={handleSubmit}>

        <input type="text" onChange={handleChange} name="title" placeholder="search"/>
        <label htmlFor="from">From</label>
        <input type="date" onChange={handleChange} name="date1" id="from" value={formData.date1} />
        <label htmlFor="to">To</label>
        <input type="date" onChange={handleChange} name="date2" id="to"
        value={formData.date2} />
        <label htmlFor="">Priority</label>
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