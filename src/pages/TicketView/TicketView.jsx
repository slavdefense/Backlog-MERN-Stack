import userEvent from "@testing-library/user-event";
import { useLocation, Link } from "react-router-dom";
import './TicketView.css'

const TicketView = (props) => {
  const location = useLocation()
  console.log(location.state.title)

  const handleClick = (evt)=>{
    evt.preventDefault()
    props.handleDeleteTicket(location.state._id)
  }
  return (
    <>
    <div className="ticket-view">
      <h1>Ticket Details</h1>
      <h2>{location.state.title}</h2>
      <p>{location.state.description}</p>
      <p>{location.state.status}</p>
      <p>{location.state.priority}</p>
      <p>{location.state.submittedBy.name}</p>
      {(location.state.relatedLink) ?
        <p>Related Link: {location.state.relatedLink}</p>
        : <p></p>
      }
      <Link className="btn btn-warning" state={location.state} to="/editTicket">Edit</Link>
      <button onClick={handleClick}> Delete</button>
    </div>
    
    </>
  );
}

export default TicketView;