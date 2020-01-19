const util = require('../../utils/index')
// const status = require('../../utils/index')
  
  module.exports.handler = async ({ body }) => {
    console.log('Cheguei handler user-create')

    try {      
      // const form = JSON.parse(body)      
      const code = await util.generateConfirmationCode()
      const {comidaComAlface} = JSON.parse(body)

      if(comidaComAlface === 1){
        console.log('faço algo exclusivo')
        return  util.status(200, 'Entrei no Step 1 com sucesso e terminei')        
      }
      const form = {
        newBody:{
          age: 32,
          adreess: 'Rua abc 2212 ',
          nick: 'Goku',
          power: 10029,
          code
        }
      }

  

      console.log('Cheguei antes de enviar a resposta')

      /* return {
        statusCode: 200,
        body: JSON.stringify(form)
      }*/

      return  util.status(200, form)

    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
  