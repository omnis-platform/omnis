const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const updatePassword = require('../helpers/updatePassword')

const passwordUpdate = async (endpointName, data, userToken) => {
  if (config.appId) {
    const res = await fetch(Routes.userPasswordUpdatePath(endpointName, userToken), {
      method: 'PATCH',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: updatePassword(data)
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = passwordUpdate
