import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddTicket.css'

const AddTicket = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: {enum: ["Not started", "In progress", "Completed"]},
  })

  return ( 
    <div className="addTicket">
    <h1>Add Ticket</h1>
    <form
      toComplete="off"
    >
      <div className="inputs">
        <label>
          Title
        </label>
        <br />
        <input 
          type="text" placeholder="Title" 
        />
        <br />
        <label>
          Details
        </label>
        <br />
        <textarea
          placeholder="Add informationa about the issue"
          cols="30" rows="10"
        />
        <br />
        <label>Link</label>
        <br />
        <p>Add a URL to the page that has an issue.</p>
        <input 
          type="url"
          placeholder=""
        />
        <br />
        <label>Priority Level</label>
        <select
          name="priority"
        >
          <option value="High">
            High
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="Low">
            Low
          </option>
        </select>
        <br />
        <label>
          Add an image
        </label>
        <br />
        <input type="file"/>
      </div>
      <br />
      <Link to="/">
        <button>Submit</button>
      </Link>
    </form>
    </div>
  );
}

export default AddTicket;


export {
  AddTicket
}