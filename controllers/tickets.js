
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
  .then(userProfile => {
    Ticket.create(req.body)
    .then(newTicket => {
      Profile.findById(req.body.assignedTo)
        .then(assignedToProfile => {
          // sets up conditional in case ticket is assigned to logged in user
          if (req.body.assignedTo === req.body.submittedBy) {
            assignedToProfile.tickets.push(newTicket._id)
            assignedToProfile.save()  
          } else {
            assignedToProfile.tickets.push(newTicket._id)
            assignedToProfile.save()
            userProfile.tickets.push(newTicket._id)
            userProfile.save()
          }
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