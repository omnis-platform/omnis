const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const query = require('./helpers/query')

/**
 * get method return an promise
 * example Omnis.email('endpointName', { limit: 1 }, { order: 'asc' }, { q: 'lorem' })
 * @param  string  endpointName
 * @param  array   arg
 */

module.exports = async (endpointName, ...arg) => (
  await requestWrap('get', Routes.httpPath(endpointName, query(...arg)))
)
