const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const idsQuery = require('./helpers/idsQuery')

/**
 * put method return an promise
 * example Omnis.email('endpointName', [123456] or [] if delete all)
 * @param  string  endpointName
 * @param  object  ids
 */

const remove = async (endpointName, ids = []) => (
  await requestWrap('delete', Routes.httpPath(endpointName, idsQuery(ids)))
)

module.exports = remove
