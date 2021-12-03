import { User } from '../models/user.js'

function show(req,res) {
  User.findById(req.body._id)
    .then(user => {
      user.populate({
        path: 'profile',
        populate: {
          path: 'tickets'
        }
      })
        .then(profile => {
          res.json(profile)
      })
    })
}

export {
  show
}