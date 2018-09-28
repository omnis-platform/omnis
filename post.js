const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const body = require('./helpers/body')

/**
 * post method return an promise
 * example Omnis.email('endpointName', { key: 'text' })
 * @param  string  endpointName
 * @param  object  data
 */

module.exports = async (endpointName, data) => (
  await requestWrap('post', Routes.httpPath(endpointName), body(data))
)
