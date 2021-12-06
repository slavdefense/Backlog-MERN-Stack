
import { Profile } from '../models/profile.js'
import { Ticket } from '../models/ticket.js'

function index(req, res) {
  Ticket.find({})
    .populate('submittedBy')
    .populate('assignedTo')
    .then((tickets) => {
      res.json(tickets)
    })
}

function create(req, res) {
  Profile.findById(req.body.submittedBy)
    .then(userProfile => {
      Ticket.create(req.body)
        .then(newTicket => {
          Profile.findById(req.body.assignedTo)
            .then(assignedToProfile => {
              assignedToProfile.ticketsAssigned.push(newTicket._id)
              assignedToProfile.save()
                .then(() => {
                  userProfile.ticketsSubmitted.push(newTicket._id)
                  userProfile.save()
                  res.json(newTicket)
                })
            })
        })
    })
}

async function deleteTickets(req, res) {
  // find the ticket to delete
  const ticketToDelete = await Ticket.findById(req.params.id)
  // find the profile that submitted the ticket
  const submittedByProf = await Profile.findById(ticketToDelete.submittedBy)
  // delete the ticket number from the profile of the submitter
  submittedByProf.ticketsSubmitted.splice(submittedByProf.ticketsSubmitted.indexOf(req.params.id), 1)
  await submittedByProf.save()
  // find the profile that is assigned to the ticket
  const assignedToProf = await Profile.findById(ticketToDelete.assignedTo)
  // delete the ticket number from the profile of the submitter
  assignedToProf.ticketsAssigned.splice(assignedToProf.ticketsAssigned.indexOf(req.params.id), 1)
  await assignedToProf.save()
  // delete the ticket
  const deletedTicket = await Ticket.findByIdAndDelete(req.params.id)
  res.json(deletedTicket)
}

async function update(req, res) {
  const oldTicketData = await Ticket.findById(req.params.id);
  // if assigned to profile changes 
  if (oldTicketData.assignedTo !== req.body.assignedTo) {
    // find the old profile and delete the ticket off of it.
    const oldProfile = await Profile.findById(oldTicketData.assignedTo)
    // find the new profile and add the ticket id to it
    const newProfile = await Profile.findById(req.body.assignedTo)
    const indexNum = oldProfile.ticketsAssigned.indexOf(req.params.id)
    oldProfile.ticketsAssigned.splice(indexNum, 1)
    // find the old profile and delete the ticket off of it.
    await oldProfile.save()
    newProfile.ticketsAssigned.push(req.params.id)
    await newProfile.save()
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updatedTicket)
}

function addComment(req, res) {
  req.body.author = req.user.profile
  Ticket.findById(req.params.id)
    .then(ticket => {
      ticket.comments.push(req.body)
      ticket.save()
        .then(savedTicket => {
          res.json(savedTicket)
        })
    })
}






export {
  index,
  create,
  deleteTickets as delete,
  update,
  addComment
}