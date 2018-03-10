const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const body = require('./helpers/body')

/**
 * put method return an promise
 * example Omnis.email('endpointName', { key: 'text' })
 * @param  string  endpointName
 * @param  object  data
 */

const put = async (endpointName, data) => {
  if (config.appId) {
    return await fetch(Routes.httpPath(endpointName), {
      method: 'PUT',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: body(data)
    })
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = put
