module.exports = {
  httpPath: (endpointName, q = '') => (
    `https://omnis-platform.com/api/v1/${endpointName}${q}`
  ),
  websoketPath: (endpointName, apiKey) => (
    `wss://omnis-platform.com/api/cable/${endpointName}?api_key=${apiKey}`
  ),
  userCreatePath: endpointName => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/create`
  ),
  userLoginPath: endpointName => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/login`
  ),
  userLogoutPath: (endpointName, userId, sessionToken) => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/${userId}/logout`
  ),
  userShowPath: (endpointName, userId) => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/${userId}`
  ),
  userEditPaht: (endpointName, userId) => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/${userId}/edit`
  ),
  userRemovePath: (endpointName, userId) => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/${userId}/delete`
  ),
  userResetPasswordPath: endpointName => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/reset`
  ),
  userPasswordUpdatePath: (endpointName, userToken) => (
    `https://omnis-platform.com/api/auth/${endpointName}/user/reset/${userToken}`
  )
}