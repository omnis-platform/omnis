const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')

const show = async (endpointName, userId) => {
  if (config.appId) {
    return await fetch(Routes.userShowPath(endpointName, userId), {
      method: 'GET',
      headers: REQUEST_HEADER(),
      mode: 'cors'
    })
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = show
