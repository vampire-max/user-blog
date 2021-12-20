const mongoose = require('mongoose')

const blogModel = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    // user: { ref: 'user' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('blog', blogModel)
