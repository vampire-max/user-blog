const mongoose = require('mongoose')

const userModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    dob: { type: Date },
    gender: { type: String },
    country: { type: String },
  },
  { timestamps: true },
)

module.exports = mongoose.model('user', userModel)
