
import { Profile } from '../models/profile.js'
import { Ticket } from '../models/ticket.js'

function index(req,res){
  Ticket.find({})
  .populate('submittedBy')
  .populate('assignedTo')
  .then((tickets)=> {
    res.json(tickets)
  })
}

function create(req,res){
  Profile.findById(req.body.submittedBy)
  .then(profile => {
    Ticket.create(req.body)
    .then(newTicket => {
      Profile.findById(req.body.assignedTo)
        .then(assignedToProfile => {
          console.log(assignedToProfile)
          assignedToProfile.tickets.push(newTicket._id)
          assignedToProfile.save()
          profile.tickets.push(newTicket._id)
          profile.save()
          res.json(newTicket)    
        })
  })
  })
}

function deleteTickets(req,res){
  Ticket.findByIdAndDelete(req.params.id)
  .then((ticket)=>res.json(ticket))
  .catch((err)=>res.json(err))
}
function update(req,res){
  Ticket.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(ticket => {
    res.json(ticket)
  })
}

export{
  index,
  create,
  deleteTickets as delete,
  update
}