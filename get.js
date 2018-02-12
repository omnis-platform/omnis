const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const query = require('./helpers/query')

/**
 * get method return an promise
 * example Omnis.email('endpointName', { limit: 1 }, { order: 'asc' }, { q: 'lorem' })
 * @param  string  endpointName
 * @param  array   arg
 */

const get = async (endpointName, ...arg) => {
  if (config.appId) {
    const res = await fetch(Routes.httpPath(endpointName, query(...arg)), {
      method: 'GET',
      headers: REQUEST_HEADER(),
      mode: 'cors'
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = get