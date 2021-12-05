import userEvent from "@testing-library/user-event";
import { useLocation, Link } from "react-router-dom";
import './TicketView.css'
import Map from "../../components/Map/map";

const TicketView = (props) => {
  const location = useLocation()
  console.log(location.state.officeLocation)

  

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
        <Map officeLocation = {location.state.officeLocation}/>

        <Link className="btn btn-warning" state={location.state} to="/editTicket">Edit</Link>
        <button onClick={handleClick}> Delete</button>
      </div >

    </>
  );
}

export default TicketView;