const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const body = require('../helpers/body')

const login = async (endpointName, data) => {
  if (config.appId) {
    return await fetch(Routes.userLoginPath(endpointName), {
      method: 'POST',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: body(data)
    })
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = login
