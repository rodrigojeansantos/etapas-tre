module.exports.handler = async ({ }) => {
    console.log('Cheguei handler newUser-create')

    try {
      const form = {
        age: "over9000"
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
  