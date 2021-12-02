import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddTicket.css'

const AddTicket = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    relatedLink: '',
    status: 'Not started',
    priority: '',
    submittedBy: props.user,
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log('test1')
      props.handleSubmitTicket(formData)
      navigate('/tickets')
    } catch(e) {
      console.log(e)
    }
  }

  const isFormInvalid = () => {
    return !(title && description && priority)
  }

  const {title, description, priority, relatedLink} = formData

  return ( 
    <div className="addTicket">
    <h1>Add Ticket</h1>
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
          placeholder="Describe the problem here. Include any relevant information and details."
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
      </div>
      <br />
        <button disabled={isFormInvalid()}>Submit</button>
    </form>
    </div>
  );
}

export default AddTicket;


export {
  AddTicket
}