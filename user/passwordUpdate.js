const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const updatePassword = require('../helpers/updatePassword')

module.exports = async (endpointName, data, userToken) => (
  await requestWrap('patch', Routes.userPasswordUpdatePath(endpointName, userToken), updatePassword(data))
)
