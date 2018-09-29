const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')

module.exports = async (endpointName, userId) => (
  await requestWrap('get', Routes.userShowPath(endpointName, userId))
)
