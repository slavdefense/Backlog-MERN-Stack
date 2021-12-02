import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema(
  {
    name: String,
    members: [{type: mongoose.Types.ObjectId, ref:"Profile"}]
  },
  {
    timestamps: true,
  }
  )

const profileSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    tickets: [{type: mongoose.Types.ObjectId, ref:"Ticket"}],
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