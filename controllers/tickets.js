
import { Profile } from '../models/profile.js'
import { Ticket } from '../models/ticket.js'
import { User } from '../models/user.js'

function index(req,res){
  Ticket.find({})
  .then((tickets)=>res.json(tickets))

}

function create(req,res){
  User.findById(req.body.submittedBy._id)
  .then(user => {
    Profile.findById(user.profile)
    .then(profile => {
      Ticket.create(req.body)
      .then(newTicket => {
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