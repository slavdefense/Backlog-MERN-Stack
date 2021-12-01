import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(res => {
    return res.json()
  })
  .then(({ token }) => tokenService.setToken(token)) 
  .catch(err => {
    console.log(err)
  })
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

function login(credentials) {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.ok) return res.json()
    throw new Error('Bad Credentials!')
  })
  .then(({ token }) => tokenService.setToken(token))
  .catch(err => {
    console.log(err)
  })
}

export {
  signup,
  getUser,
  logout,
  login
}
