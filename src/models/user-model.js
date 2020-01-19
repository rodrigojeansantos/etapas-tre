const mongoose = require('mongoose')

const { CLUB_API_AUTH_CLIENTID } = process.env

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, lowercase: true },
  avatar: { type: String },
  login: { type: String, lowercase: true },
  password: { type: String },
  company: { type: String, default: CLUB_API_AUTH_CLIENTID },
  cpf: { type: String },
  occupationSlug: { type: String },
  validated: { type: Boolean, default: false },
  confirmationCode: { type: String },
  status: {
    type: Number,
    enum: [1, 2], // 1 - Permitido, 2 - Nao Permitido
    default: 1
  },
  dataAuth: { type: Object },
  birthDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  aboutMe: {
    resume: { type: String },
    from: { type: String },
    gender: { type: String },
    birthday: { type: Date },
    address: { type: String },
    numberAddress: { type: String },
    neighborhood: { type: String },
    complement: { type: String },
    state: { type: String },
    city: { type: String }
  },
  contact: {
    email: { type: String },
    telephone: { type: String },
    cep: { type: String }
  },
  aboutUs: {
    name: { type: String },
    cnpj: { type: String },
    email: { type: String },
    telephone: { type: String },
    cep: { type: String },
    address: { type: String },
    numberAddress: { type: String },
    neighborhood: { type: String },
    complement: { type: String },
    state: { type: String },
    city: { type: String },
    site: { type: String }
  },
  partners: {
    ipremi: {
      userIdExternal: { type: Number }
    }
  }
})

module.exports.User = mongoose.model('users', userSchema)
