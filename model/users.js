const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: String,
  password: String
}, {
  timestamps: true
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;
