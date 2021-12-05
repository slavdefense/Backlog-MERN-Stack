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
      console.log("you suck")
      props.handleAddComment(formData)
      setFormData({content: '', ticketId: props.ticketId})
    } catch (e) {
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
        <textarea
          name="content" cols="30" rows="10"
          value={content}
          onChange={handleChange}
        />
       <br/>


        <button  className="btn btn-outline-info" disabled={isFormInvalid()}>Comment
        </button>
      </form>
    </>

  );
}

export default CommentForm;