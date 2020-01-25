/* eslint-disable standard/no-callback-literal */

const jwt = require('jsonwebtoken')
const axios = require('axios')

const {
  CLUB_API_AUTH_URI
} = process.env

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  console.log('event', event)
  // console.log('auth', event.authorizationToken)
  if (!event.authorizationToken) callback('Unauthorized')
  const token = event.authorizationToken.split('Bearer')[1]
    ? event.authorizationToken.split('Bearer')[1].trim() : event.authorizationToken.trim()
  const decoded = jwt.decode(token)
  axios.get(`${CLUB_API_AUTH_URI}/oauth/validate?access_token=${token}`)
    .then(() => {
      const policy = this.generatePolicy(decoded.email, 'Allow', event.methodArn, decoded.customData)
      callback(null, policy)
    })
    .catch((err) => {
      console.log(err)
      callback('Unauthorized')
    })
}

module.exports.generatePolicy = (principalId, effect, resource, context = {}) => {
  return {
    principalId,
    context,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [{
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource
      }]
    }
  }
}
