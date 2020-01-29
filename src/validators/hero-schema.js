const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

const raça = Joi.string().valid(
	'Androide',
  'Anjos',
  'Demônio',
  'Deus',
  'Deus-Dragon',
  'Dragon',
  'Humano',
  'Kaioshin',
  'Majin',
  'Namekuseijin',
  'Raça-Freeza',
  'Sayajin',
  'Tsufurujin'
).required()

module.exports.hero = Joi.object().keys({  
  data: Joi.date(),
  nome: Joi.string().required(),
  planetaDeOrigem: Joi.string().required(),  
  raça,
  img: Joi.string().allow(null),
	sexo: Joi.string().required(),
	foiMorto: Joi.boolean().allow(null).required()

})

