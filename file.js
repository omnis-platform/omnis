const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const body = require('./helpers/body')
const fileObject = require('./helpers/fileObject')

const makeRequest = async (endpointName, file) => {
  const res = await fetch(Routes.httpPath(endpointName), {
    method: 'POST',
    headers: REQUEST_HEADER(),
    mode: 'cors',
    body: body(file)
  })

  return await res.json()
}

/**
 * file method return an promise
 * example Omnis.email('endpointName', { file: dataURL, name: 'test.txt', type: 'text/plain', size: '1234' })
 * @param  string  endpointName
 * @param  object data
 */

const file = async (endpointName, data) => {
  if (config.appId) {	
    try {
      const file = await fileObject(data)
      return await makeRequest(endpointName, file)
    } catch (err) {
      console.error(err)
    }
  } else {
    console.error("omnis.json doesn't found")
  }
}

module.exports = file
