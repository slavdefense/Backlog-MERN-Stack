import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema(
  {
    content: String,
    author: [{type: mongoose.Types.ObjectId, ref:"Profile"}]
  },
  {
    timestamps: true,
  }
  )

const ticketSchema = new mongoose.Schema(
  {
    title : { type: String, required: true},
    description : { type: String, required: true},
    priority : { type: String, enum: ["Low", "Medium", "High"] },
    startDate: Date,
    completedDate: Date,
    status: {
      type: String,
      enum: ["not started", "in progress", "completed"],
      default: "not started"
    },
    assignedTo: {type: mongoose.Types.ObjectId, ref: "Profile"},
    submittedBy: {type: mongoose.Types.ObjectId, ref: "Profile"},
    relatedLink: String,
    comments: [commentSchema]
  },
  {
    timestamps: true,
  }
  )

const Ticket = mongoose.model('Ticket', ticketSchema)

export {
  Ticket
}