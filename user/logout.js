const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const userToken = require('../helpers/userToken')

module.exports = async (endpointName, userId, sessionToken) => (
  await requestWrap('delete', Routes.userLogoutPath(endpointName, userId), userToken(sessionToken))
)
