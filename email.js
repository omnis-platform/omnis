const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const body = require('./helpers/body')

/**
 * email method return an promise
 * example Omnis.email('endpointName', { email_to: 'email@example.com', email_subject: 'test', content: 'Hello World!' })
 * @param  string  endpointName
 * @param  object data
 */

module.exports = async (endpointName, data) => (
  await requestWrap('post', Routes.httpPath(endpointName), body(data))
)
