import { User } from '../models/user.js'

function show(req,res) {
  console.log(req.body._id)
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