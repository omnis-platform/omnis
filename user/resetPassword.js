const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const body = require('../helpers/body')

module.exports = async (endpointName, email) => (
  await requestWrap('post', Routes.userResetPasswordPath(endpointName), body({ email: email }))
)
