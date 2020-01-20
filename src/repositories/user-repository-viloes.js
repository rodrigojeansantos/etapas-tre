const { MongoConnection, BaseRepository } = require('core-marcenaria/connectors/mongodb')
const { UserViloesZSchema } = require('core-marcenaria/connectors/mongodb/schemas/user-club')

class UserRepositoryViloes extends BaseRepository {
  constructor () {
    super('viloesz', UserViloesZSchema, new MongoConnection(process.env.CLUB_MONGODB))
  }
}

module.exports = new UserRepositoryViloes();