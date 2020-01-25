const { MongoConnection, BaseRepository } = require('core-marcenaria/connectors/mongodb')
const { UserClubSchema } = require('core-marcenaria/connectors/mongodb/schemas/user-club')

class UserRepository extends BaseRepository {
  constructor () {
    super('guerreirosz', UserClubSchema, new MongoConnection(process.env.CLUB_MONGODB))
  }
}

module.exports = new UserRepository()
