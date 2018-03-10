const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const userToken = require('../helpers/userToken')

const remove = async (endpointName, userId, sessionToken) => {
  if (config.appId) {
    return await fetch(Routes.userRemovePath(endpointName, userId), {
      method: 'DELETE',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: userToken(sessionToken)
    })
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = remove
