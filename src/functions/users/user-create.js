const util = require('../../utils/index')
const userRepository = require('./../../repositories/user-repository')
const userRepositoryV = require('../../repositories/user-repositoryV')

  module.exports.handler = async ({ body }) => {    

    try {      
       
      const code = await util.generateConfirmationCode()
      const form = JSON.parse(body)
      const {comidaComAlface} = form

      if(comidaComAlface === 1){
        console.log('Guerreiros Z')
        
        const guerreiroZ = {
          ...form
        }
        console.log(guerreiroZ)

        const novoDado = await userRepository.create(guerreiroZ) // prepara o dado
        await userRepository.save(novoDado) // salva no banco
        return  util.status(200, novoDado)        
      }
      if(comidaComAlface === 2){
        console.log('Vilões Z')

        const viloesZ = {
          ...form
        }
        console.log(viloesZ)
      
        const novoDado = await userRepositoryV.create(viloesZ)
        await userRepositoryV.save(novoDado)
        return util.status(200, novoDado)
      
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
  