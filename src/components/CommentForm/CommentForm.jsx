import React, { useState } from 'react'


const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    content: '',
    ticketId: props.ticketId
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
      props.handleAddComment(formData)
    } catch(e) {
      console.log(e)
    }
  }

  const isFormInvalid = () => {
    return !(content)
  }

  const { content } = formData


  return ( 
    <>
      <h4>Comment : </h4>
      <form autoComplete="off" onSubmit={handleSubmit}>

      </form>
      <textarea 
        name="content" cols="30" rows="10" 
        value={content} 
        onChange={handleChange} 
      />
      <br/>
      <button type="button" className="btn btn-outline-info" disabled={isFormInvalid()}>Comment</button>
    </>
    
   );
}
 
export default CommentForm;