import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './EditTicket.css'


const EditTicket = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [image, setImage] = useState('');

  const today = new Date().toLocaleString() + ''

  const [formData, setFormData] = useState({
    title: location.state.title,
    description: location.state.description,
    relatedLink: location.state.relatedLink,
    status: location.state.status,
    priority: location.state.priority,
    submittedBy: location.state.submittedBy,
    assignedTo: location.state.assignedTo,
    id: location.state._id,
    image: location.state.image,
    completedDate: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCompletedDateChange = e => {
    if (location.state.status === 'Not started ') {
      return <p>Ticket status not set as completed</p>
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let finalFormData = {...formData}
      if (image) {
        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "uurkvmkp")
        data.append('folder', 'backlog')
        data.append("cloud_name", "meilingb")
        const res = await (await fetch("https://api.cloudinary.com/v1_1/meilingb/image/upload", {
          method: "post",
          body: data
        })).json()
        console.log(res.url)
        finalFormData['image'] = res.url;
      }
      props.handleUpdateTicket(finalFormData)
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
          <h4>Status</h4>
        </label>
        <br />
        <select
          name="status"
          onChange={handleChange}
        >
          <option
            name="status"
            value='Not started'
          >
            Not started
          </option>
          <option 
            name="status"
            value='In progress'
          >
            In progress
          </option>
          <option
            name="status" 
            value='Completed'
          >
            Completed
          </option>
        </select>
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
        <label><h4>Completed Date:</h4></label>
        <input 
          type="date" 
          name="completedDate"
          onChange={handleChange} 
        />
        <br /><br />
        <label>
          <h4>Add an image</h4>
        </label>
        <br />
        <input 
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
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
          <option value="">-- Select a user --</option>
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
