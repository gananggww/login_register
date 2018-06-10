const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sellerSchema = new Schema({
  ktp_number: {
    type: String,
    required: true
  },
  photo_user: {
    type: String,
    required: true
  },
  photo_ktp: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
})

const sellerModel = mongoose.model('sellers', sellerSchema)

module.exports = sellerModel;
