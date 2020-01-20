const mongoose = require('mongoose')

const { CLUB_API_AUTH_CLIENTID } = process.env

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, lowercase: true },
  poder: { type: Number }
})

const userSchemaV = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, lowercase: true },
  powers: { type: Number },
  vilao: { type: Boolean }
})

module.exports.User = mongoose.model('guerreirosz', userSchema)
module.exports.UserV = mongoose.model('viloesz', userSchemaV)