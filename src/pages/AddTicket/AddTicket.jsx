import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddTicket.css'

const AddTicket = (props) => {
  const today = new Date().toLocaleString() + ''
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    relatedLink: '',
    status: 'Not started',
    priority: "High",
    officeLocation: '',
    submittedBy: {},
    startDate: today,
    completedDate: '',
    assignedTo: '',
    image: ''
  })

  useEffect(() => {
    if (props.profile !== undefined) {
      setFormData({
        ...formData,
        submittedBy: props.profile._id
      })
    }
  }, [props.profile])

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
      let finalFormData = { ...formData }
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
        finalFormData['image'] = res.url;
      }
      props.handleSubmitTicket(finalFormData)
      navigate('/tickets')
    } catch (e) {
      console.log(e)
    }
  }

  const isFormInvalid = () => {
    return !(title && description && priority && assignedTo)
  }

  const { title, description, priority, relatedLink, assignedTo, officeLocation } = formData

  if (props.profile === undefined) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="addTicket">
        <h1>Add a Ticket</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="form-floating"
        >
          <input
            type="hidden"
            name="submittedBy"
            value={props.profile._id}
          />
          <label for="floatingInput">
            <h4>Title</h4>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={title}
            id="floatingInput"
          />
          <br /><br />
          <label
            for="floatingTextarea"
          >
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
            className="form-control"
            id="floatingTextarea"
          />
          <br /><br />
          <label>
            <h4> Office Location</h4>
          </label>
          <br />
          <input 
            type="text"
            class="form-control"
            id="floatingInput" 
            value={officeLocation}
            placeholder="Hollywood"
            onChange={handleChange}
            name="officeLocation"
          />
          <br />
          <label>
            <h4>Link</h4>
          </label>
          <br />
          <p className="subtitle">Add a URL to the page that has an issue.</p>
          <input
            class="form-control"
            id="floatingInput" 
            type="url"
            placeholder=""
            name="relatedLink"
            onChange={handleChange}
            value={relatedLink}
          />
          <br />
          <label
            for="floatingSelect"
          >
            <h4>Priority Level</h4>
          </label>
          <br />
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={handleChange}
          >
            <option
              selected
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
              )
            }
            )}
          </select>
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
          <button className="btn btn-success" disabled={isFormInvalid()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTicket;


export {
  AddTicket
}