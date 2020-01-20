const { MongoConnection, BaseRepository } = require('core-marcenaria/connectors/mongodb')
const { UserClubSchemaV } = require('core-marcenaria/connectors/mongodb/schemas/user-club')

class UserRepositoryV extends BaseRepository {
  constructor () {
    super('viloesZ', UserClubSchemaV, new MongoConnection(process.env.CLUB_MONGODB))

  }
}

module.exports = new UserRepositoryV()
