import {Ticket} from '../models/ticket.js'

function index(req,res){
  Ticket.find({})
  .then((tickets)=>res.json(tickets))

}

function create(req,res){
  Ticket.create(req.body)
  .then(newTicket => res.json(newTicket))
}

function deleteTickets(req,res){

}
function update(req,res){

}

export{
  index,
  create,
  deleteTickets as delete,
  update
}