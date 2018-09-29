const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const body = require('./helpers/body')

/**
 * put method return an promise
 * example Omnis.email('endpointName', { key: 'text' })
 * @param  string  endpointName
 * @param  object  data
 */

module.exports = async (endpointName, data) => (
  await requestWrap('put', Routes.httpPath(endpointName), body(data))
)
