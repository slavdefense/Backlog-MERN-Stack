import React, { useState, useEffect } from 'react';
import './Search.css'


const Search = ({ allTickets }) => {
  const [searchTickets, setSearchTickets] = useState()
  const [filteredTicket, setFilteredTicket] = useState()
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    date1: '',
    date2: '',
  })

  const formDate = new Date(formData.date1.split('-')[0], parseInt(formData.date1.split('-')[1]) - 1, formData.date1.split('-')[2])

  const formDate2 = new Date(formData.date2.split('-')[0], parseInt(formData.date2.split('-')[1]) - 1, formData.date2.split('-')[2])
  useEffect(() => {
    setSearchTickets(allTickets)
  }, [])

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const filteredData = searchTickets.filter((item) => {
      return item.priority === formData.priority || item.title === formData.title || (new Date(item.createdAt.slice(0, 10).split('-')[0], parseInt(item.createdAt.slice(0, 10).split('-')[1]) - 1, item.createdAt.slice(0, 10).split('-')[2]) > formDate && new Date(item.createdAt.slice(0, 10).split('-')[0], parseInt(item.createdAt.slice(0, 10).split('-')[1]) - 1, item.createdAt.slice(0, 10).split('-')[2]) < formDate2)
    })
    setFilteredTicket(filteredData)
  }

  return (
    <div className="search-view">
      {/* <h1>Search using any fields</h1> */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="title" placeholder="search" />
        <label htmlFor="from">From</label>
        <input type="date" onChange={handleChange} name="date1" id="from" value={formData.date1} />
        <label htmlFor="to">To</label>
        <input type="date" onChange={handleChange} name="date2" id="to"
          value={formData.date2} />
        <label htmlFor="">Priority</label>
        <select onChange={handleChange}
          name="priority"
        >
          <option value="">
            -- Select a priority level --
          </option>
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
        <button className="btn btn-submit text-center" > Submit </button>
      </form>
      {
        filteredTicket ?
          <div>{
            filteredTicket.map((item) => {
              return (
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
                    <td>{item.title}</td>
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

export default Search;