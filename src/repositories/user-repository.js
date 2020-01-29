const { MongoConnection, BaseRepository } = require('core-marcenaria/connectors/mongodb')
//const { guerreirosZSchema } = require('core-marcenaria/connectors/mongodb/schemas/user-club')

const { guerreirosZSchema } = require('core-marcenaria/connectors/mongodb/schemas/guerreiros-z')

class UserRepository extends BaseRepository {
  constructor () {
    super('guerreirosz', guerreirosZSchema, new MongoConnection(process.env.CLUB_MONGODB))
  }
}

module.exports = new UserRepository()
