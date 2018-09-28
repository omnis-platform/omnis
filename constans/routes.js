const config = require('../config')

module.exports = {
  httpPath: (endpointName, q = '') => (
    `/v1/${config.app}/${endpointName}${q}`
  ),
  websoketPath: (endpointName, apiKey) => (
    `wss://cloud.omnis-platform.com/api/cable/${endpointName}?api_key=${apiKey}`
  ),
  userCreatePath: endpointName => (
    `/auth/${config.app}/${endpointName}/user/create`
  ),
  userLoginPath: endpointName => (
    `/auth/${config.app}/${endpointName}/user/login`
  ),
  userLogoutPath: (endpointName, userId, sessionToken) => (
    `/auth/${config.app}/${endpointName}/user/${userId}/logout`
  ),
  userShowPath: (endpointName, userId) => (
    `/auth/${config.app}/${endpointName}/user/${userId}`
  ),
  userEditPaht: (endpointName, userId) => (
    `/auth/${config.app}/${endpointName}/user/${userId}/edit`
  ),
  userRemovePath: (endpointName, userId) => (
    `/auth/${config.app}/${endpointName}/user/${userId}/delete`
  ),
  userResetPasswordPath: endpointName => (
    `/auth/${config.app}/${endpointName}/user/reset`
  ),
  userPasswordUpdatePath: (endpointName, userToken) => (
    `/auth/${config.app}/${endpointName}/user/reset/${userToken}`
  )
}