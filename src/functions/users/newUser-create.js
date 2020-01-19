module.exports.handler = async ({ body }) => {
    console.log('Cheguei handler newUser-create')

    try {
      const form = {
        age: 32,
        adreess: 'Rua abc 2212 ',
        nick: 'Goku',
        power: 10029
      }

    
      return {
        statusCode: 200,
        body: JSON.stringify(form)
      }
    } catch (error) {
      console.log('error', error)
      return (error, 'Marceneiros')
    }
  }
  