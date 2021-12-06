import userEvent from "@testing-library/user-event";
import { useLocation, Link } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import ApiCall from "../ApiCall/Map-api-call";
import './TicketView.css'


const TicketView = (props) => {
  const location = useLocation()

  const handleClick = (evt) => {
    evt.preventDefault()
    props.handleDeleteTicket(location.state._id)
  }
  return (
    <>
      <div className="ticket-view">
        <h1>Ticket Details</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{location.state.title}</h5>
            <p class="card-subtitle mb-2 text-muted" >{location.state.status}</p>
            <h5>Description</h5>
            <h6 class="card-text">{location.state.description}</h6><br />
            <p>Priority Level: {location.state.priority}</p><br />
            <p>Submitted By: {location.state.submittedBy.name}</p><br />
            <p>Assigned To: {location.state.assignedTo.name}</p><br />
            {
              (location.state.relatedLink) ?
                <p>Related Link: {location.state.relatedLink}</p>
                : <p></p>
            }
          </div>
        </div>
        <Link className="btn btn-warning" state={location.state} to="/editTicket">Edit</Link>
        <div>
        <button className="btn btn-danger" onClick={handleClick}> Delete</button>
        </div>
        <div className= "comment-form">
        <CommentForm handleAddComment={props.handleAddComment} ticketId={location.state._id}/>
        </div>
        <ApiCall wantedData={location.state.officeLocation}/>
        
      </div >
      


    </>
  );
}

export default TicketView;