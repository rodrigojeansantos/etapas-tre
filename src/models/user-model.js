const mongoose = require('mongoose')

const { CLUB_API_AUTH_CLIENTID } = process.env

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, lowercase: true },
 
})

module.exports.User = mongoose.model('guerreirosz', userSchema)
