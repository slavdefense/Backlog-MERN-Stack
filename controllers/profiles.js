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
    .populate('ticketsAssigned')
    .then(profiles => {
      res.json(profiles)
    })
}

async function updateTeam(req, res) {
  const foundProfile = await Profile.findById(req.body.profileId)
  foundProfile['team'][0] = ({name: req.body.priority})
  const completedProfile = await foundProfile.save()
  completedProfile.populate('team')
  res.json(completedProfile)
}

export {
  show,
  index,
  updateTeam
}