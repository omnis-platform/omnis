const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const body = require('../helpers/body')
const user = require('../helpers/user')

const makeRequest = async (endpointName, userData) => {
  return await fetch(Routes.userCreatePath(endpointName), {
    method: 'POST',
    headers: REQUEST_HEADER(),
    mode: 'cors',
    body: body(userData)
  })
}

const create = async (endpointName, data) => {
  console.log(body)

  if (config.appId) {
    const userData = await user(data)
    return await makeRequest(endpointName, userData)
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = create
