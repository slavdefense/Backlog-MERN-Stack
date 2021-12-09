import * as tokenService from './tokenService'
const BASE_URL = '/api/profiles'

function getProfile(user) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => res.json())
}

function getAllProfiles() {
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
  })
  .then(res => res.json())
}

function addTeam(teamData) {
  return fetch(`${BASE_URL}/${teamData.profileId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(teamData)
  })
  .then(res => res.json())
}


export {
  getProfile,
  getAllProfiles,
  addTeam
}