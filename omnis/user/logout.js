const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const userToken = require('../helpers/userToken')

const logout = async (endpointName, userId, sessionToken) => {
  if (config.appId) {
    const res = await fetch(Routes.userLogoutPath(endpointName, userId), {
      method: 'DELETE',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: userToken(sessionToken)
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = logout
