import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/tickets'

function createTicket(ticketData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticketData)
  })
  .then(res => res.json())
}

function getTickets() {
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}
function deleteTicket(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function updateTicket(ticketData) {
  return fetch(`${BASE_URL}/${ticketData.id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticketData)
  })
  .then(res => res.json())
}



export{
  createTicket,
  getTickets,
  deleteTicket,
  updateTicket,
}