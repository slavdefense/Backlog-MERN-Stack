import { useLocation, Link } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import ApiCall from "../ApiCall/Map-api-call";
import './TicketView.css'


const TicketView = (props) => {
  const location = useLocation()

  let formattedUrl = location.state.image.split('')
  formattedUrl.splice(48, 0, 'w_500,h_275,c_scale/')
  let finalUrl = formattedUrl.join('')

  const handleClick = (evt) => {
    evt.preventDefault()
    props.handleDeleteTicket(location.state._id)
  }

  function formattedDate(date) {
    if (date === null) {
      return
    } else {
      return date.split('').slice(0, 10)
    }
  }

  return (
    <>
      <div className="ticket-view">
        <h1>Ticket Details</h1>
        <div className="back">
          <Link to="/tickets" className="btn btn-info">
            Back to all tickets
          </Link>
        </div>
        <div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{location.state.title}</h5>
              <p class="card-subtitle mb-2 text-muted" >{location.state.status}</p>
              <h3>Description</h3>
              <h6 class="card-text">{location.state.description}</h6>
              <br />
              <h5>Priority Level: {location.state.priority}</h5>
              <br />
              <h5>Submitted By: {location.state.submittedBy.name}</h5>
              <br />
              <h5>Assigned To: {location.state.assignedTo.name}</h5>
              <br />
              {
                (location.state.relatedLink) ?
                  <h5>Related Link: {location.state.relatedLink}</h5>
                  : <></>
              }
              <h5>Submitted On:</h5>
              <p>{formattedDate(location.state.startDate)}</p>
              {
                (location.state.completedDate !== null ?
                  <>
                    <h5>Completed On:</h5>
                    <p>{formattedDate(location.state.completedDate)}</p>
                  </>
                  :
                  <></>
                )
              }
              {
                (finalUrl !== 'w_500,h_275,c_scale/' ?
                  <>
                    <p>Images:</p>
                    <img src={finalUrl} alt="file of issue"></img>
                  </>
                  :
                  <>
                  </>
                )
              }
              <br /><br />
              {location.state.officeLocation.length ?
                <>
                <h5>Location</h5>
                  <ApiCall wantedData={location.state.officeLocation} />
                </>
                :
                <>
                  <div><b>No location has been submitted...</b></div>
                </>
              }
            </div>
          </div>
        </div>
        {(props.user.profile === location.state.submittedBy._id ||
          props.user.profile === location.state.assignedTo._id) ?
          <div className="buttons">
            <Link className="btn btn-warning" state={location.state} to="/editTicket">Edit</Link>
            <div>
              <button className="btn btn-danger" onClick={handleClick}> Delete</button>
            </div>
          </div>
          :
          <></>
        }
        <br />
        {location.state.comments.length ?
          <>
            <h2>Comments: </h2>
            {location.state.comments.map(comment =>
              <div className="border border-dark" key={comment._id}>
                <figure>
                  <blockquote className="content" class="blockquote">
                    <p>{comment.content}</p>
                  </blockquote>
                  <h5>
                    <figcaption className="blockquote-footer">
                      <cite className="author" title="Source Title">{comment.author.name}</cite>
                    </figcaption>
                  </h5>
                </figure>
              </div>
            )}
          </>
          :
          <h4>no comments...</h4>
        }
        <br />
        <div className="comment-form">
          <CommentForm handleAddComment={props.handleAddComment} ticketId={location.state._id} />
        </div>
      </div >
    </>
  );
}

export default TicketView;