const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const body = require('../helpers/body')

module.exports = async (endpointName, data) => (
  await requestWrap('post', Routes.userLoginPath(endpointName), body(data))
)
