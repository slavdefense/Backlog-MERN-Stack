import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}