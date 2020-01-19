
  
  module.exports.handler = async ({ body }) => {
    console.log('Cheguei aqui')
    try {
      body = JSON.parse(body)
      if (!body) throw new ('Body not Found')
      // let response = null
      switch (body.step) {
        case 1:
          response = {} // ainda nada para fazer aqui
          break
        case 2:
          response = await verify(body)
          break
        case 3:
          response = await create(body)
          break
        default:
          throw new ('Step is required')
      }
      return 'new (response)'
    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
  