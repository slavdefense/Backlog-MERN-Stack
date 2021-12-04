import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './EditTicket.css'


const EditTicket = (props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: location.state.title,
    description: location.state.description,
    relatedLink: location.state.relatedLink,
    status: location.state.status,
    priority: location.state.priority,
    submittedBy: location.state.submittedBy,
    id: location.state._id,
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateTicket(formData)
      navigate('/tickets')
    } catch(e) {
      console.log(e)
    }
  }

  const {title, description, priority, relatedLink} = formData

  const isFormInvalid = () => {
    return !(title && description && priority)
  }


  return ( 
    <>
      <div id="edit-view-header">
      <h1>Edit Ticket:  </h1>
      </div>
      <div className="edit-view">
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="inputs">
        <label>
          <h4>Title</h4>
        </label>
        <br />
        <input 
          type="text" 
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={title}
        />
        <br /><br />
        <label>
          <h4>Details</h4>
        </label>
        <br />
        <textarea
          cols="30" 
          rows="10"
          name="description"
          onChange={handleChange}
          value={description}
        />
        <br /><br />
        <label>
          <h4>Link</h4>
        </label>
        <br />
        <p className="subtitle">Add a URL to the page that has an issue.</p>
        <input 
          type="url"
          placeholder=""
          name="relatedLink"
          onChange={handleChange}
          value={relatedLink}
        />
        <br /><br />
        <label>
          <h4>Priority Level</h4>
        </label>
        <br />
        <select
          name="priority"
          onChange={handleChange}
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
        <br /><br />
        <label>
          <h4>Add an image</h4>
        </label>
        <br />
        <input 
          type="file"
        />
        <br /><br />
        <label>
          <h4>Assignee</h4>
        </label>
        <br />
        <select
          onChange={handleChange}
          name="assignedTo"
        >
        {props.allProfiles.map(profile => {
        return (
          <option value={profile._id}>
            {profile.name}
          </option>
        )}
        )}
        </select>
      </div>
      <br />
        <button className="btn btn-success" disabled={isFormInvalid()}>Submit Changes</button>
        <Link  to="/tickets">
          <button className="btn btn-warning">
            Back To Tickets
          </button>
        </Link>
    </form>
      
    </div>
  </>
  );
}

export default EditTicket;
