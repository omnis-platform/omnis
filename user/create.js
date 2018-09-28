const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const body = require('../helpers/body')
const user = require('../helpers/user')

const makeRequest = async (endpointName, userData) => (
  await requestWrap('post', Routes.userCreatePath(endpointName), body(userData))
)

module.exports = async (endpointName, data) => {
  const userData = await user(data)
  return await makeRequest(endpointName, userData)
}
