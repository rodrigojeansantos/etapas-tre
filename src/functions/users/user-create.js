const util = require('../../utils/index')
const userRepository = require('./../../repositories/user-repository')
const userRepositoryViloes = require('./../../repositories/user-repository-viloes')

  module.exports.handler = async ({ body }) => {    

    try {      
       
      const code = await util.generateConfirmationCode()
      const form = JSON.parse(body)
      const {comidaComAlface} = form
      console.log(form)

      if(comidaComAlface === 1){
        console.log('1 alface')
        
        const guerreiroZ = {
          ...form
        }

        const novoDado = await userRepository.create(guerreiroZ) // modifica o dado usando um template                
        await userRepository.save(novoDado) //salva (insere) no banco       
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

      // 1) alface = 2, criar coleção de vilões
      // criar user no repository e um module export  no user club schema
      // require no vilões
      // criar collection
      // 

      if(comidaComAlface === 2){
        console.log('2 alface')
        
        const viloesZ = {
          ...form
        }

        console.log('Depois do form')
        const novoViloes = await userRepositoryViloes.create(viloesZ) // modifica o dado usando um template                
        await userRepositoryViloes.save(novoViloes) //salva (insere) no banco       
        return  util.status(200, novoViloes)        
      }
      

      return  util.status(200, otherForm)

    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
  