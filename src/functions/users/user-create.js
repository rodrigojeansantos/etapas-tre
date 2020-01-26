const util = require('../../utils/index')
const userRepository = require('./../../repositories/hero-repository')
const schema = require('../../validators/hero-schema')
const { JoiValidation } = require('../../validators')
const moment = require('moment')
const http = require('http')
  
  module.exports.handler = async ({ body }) => {    

    try {      
      
      const code = await util.generateConfirmationCode()
      const form = JSON.parse(body)
      
      // Camada de validação      
      const validation = await JoiValidation(schema.hero, form)
      if (!validation.isValid) {
/*
        return {
          statusCode: 422,
          body: JSON.stringify({ message: 'Envie os campos corretos'})
        }
*/
        return util.status(400, validation.message)
      } 
      
      form.dataDeCriacao = moment().format('DD/MM/YYYY')
            
      const guerreiroZ = {
        ...form
      }

      const novoDado = await userRepository.create(guerreiroZ)
      await userRepository.save(novoDado)

      return  util.status(200, novoDado)

    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
