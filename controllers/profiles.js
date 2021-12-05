import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

function show(req, res) {
  User.findById(req.body._id)
    .then(user => {
      user.populate({
        path: 'profile',
        populate: [{
          path: 'ticketsSubmitted', 
        },
        {
          path: 'ticketsAssigned'
        }]
      })
        .then(user => {
          res.json(user.profile)
        })
    })
}

function index(req, res) {
  Profile.find({})
    .populate('ticketsSubmitted')
      .then(profiles => {
        res.json(profiles)
      })
}

export {
  show,
  index
}