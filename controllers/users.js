import { User } from '../models/user.js'

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

export {
  index,
}