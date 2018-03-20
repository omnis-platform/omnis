const config = require('../config')

module.exports = {
  httpPath: (endpointName, q = '') => (
    `https://cloud.omnis-platform.com/api/v1/${config.app}/${endpointName}${q}`
  ),
  websoketPath: (endpointName, apiKey) => (
    `wss://cloud.omnis-platform.com/api/cable/${endpointName}?api_key=${apiKey}`
  ),
  userCreatePath: endpointName => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/create`
  ),
  userLoginPath: endpointName => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/login`
  ),
  userLogoutPath: (endpointName, userId, sessionToken) => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/${userId}/logout`
  ),
  userShowPath: (endpointName, userId) => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/${userId}`
  ),
  userEditPaht: (endpointName, userId) => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/${userId}/edit`
  ),
  userRemovePath: (endpointName, userId) => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/${userId}/delete`
  ),
  userResetPasswordPath: endpointName => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/reset`
  ),
  userPasswordUpdatePath: (endpointName, userToken) => (
    `https://cloud.omnis-platform.com/api/auth/${config.app}/${endpointName}/user/reset/${userToken}`
  )
}