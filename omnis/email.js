const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const body = require('./helpers/body')

/**
 * email method return an promise
 * example Omnis.email('endpointName', { email_to: 'email@example.com', email_subject: 'test', content: 'Hello World!' })
 * @param  string  endpointName
 * @param  object data
 */

const email = async (endpointName, data) => {
  if (config.appId) {    
    const res = await fetch(Routes.httpPath(endpointName), {
      method: 'POST',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: body(data)
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = email
