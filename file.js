const requestWrap = require('./helpers/requestWrap')
const Routes = require('./constans/routes')
const body = require('./helpers/body')
const fileObject = require('./helpers/fileObject')

const makeRequest = async (endpointName, file) => (
  requestWrap('post', Routes.httpPath(endpointName), body(file))
)

/**
 * file method return an promise
 * example Omnis.email('endpointName', { file: dataURL, name: 'test.txt', type: 'text/plain', size: '1234' })
 * @param  string  endpointName
 * @param  object data
 */

module.exports = async (endpointName, data) => {
  try {
    const file = await fileObject(data)
    return await makeRequest(endpointName, file)
  } catch (err) {
    console.error(err)
  }
}
