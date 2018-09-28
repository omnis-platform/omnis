const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const body = require('./helpers/body')

/**
 * patch method return an promise
 * example Omnis.email('endpointName', { key: 'text' }, [1234567])
 * @param  string  endpointName
 * @param  object  data
 * @param  array   ids
 */

module.exports = async (endpointName, data, ids) => (
  await requestWrap('patch', Routes.httpPath(endpointName, `?ids=${ids}`), body(data))
)
