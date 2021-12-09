import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
  )

const profileSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    ticketsAssigned: [{type: mongoose.Types.ObjectId, ref:"Ticket"}],
    ticketsSubmitted: [{type: mongoose.Types.ObjectId, ref:"Ticket"}],
    team: [teamSchema] 
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}