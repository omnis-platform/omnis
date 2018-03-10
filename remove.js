const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const idsQuery = require('./helpers/idsQuery')

/**
 * put method return an promise
 * example Omnis.email('endpointName', [123456] or [] if delete all)
 * @param  string  endpointName
 * @param  object  ids
 */

const remove = async (endpointName, ids = []) => {
  if (config.appId) {
    return await fetch(Routes.httpPath(endpointName, idsQuery(ids)), {
      method: 'DELETE',
      headers: REQUEST_HEADER(),
      mode: 'cors'
    })
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = remove
