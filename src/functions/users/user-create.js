const util = require('../../utils/index')
const userRepository = require('./../../repositories/user-repository')
  
  module.exports.handler = async ({ body }) => {    

    try {      
       
      const code = await util.generateConfirmationCode()
      const form = JSON.parse(body)
      const {comidaComAlface} = form

      if(comidaComAlface === 1){
        console.log('faço algo exclusivo')
        
        const guerreiroZ = {
          ...form
        }

        const novoDado = await userRepository.create(guerreiroZ)                
        await userRepository.save(novoDado)        
        return  util.status(200, novoDado)        
      }
      const otherForm = {
        newBody:{
          age: 32,
          adreess: 'Rua abc 2212 ',
          nick: 'Goku',
          power: 10029,
          code
        }
      }

      return  util.status(200, otherForm)

    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
  