const fetch = require('node-fetch')
const config = require('./config')
const Routes = require('./constans/routes')
const REQUEST_HEADER = require('./constans/requestHeaders')
const body = require('./helpers/body')

/**
 * patch method return an promise
 * example Omnis.email('endpointName', { key: 'text' }, [1234567])
 * @param  string  endpointName
 * @param  object  data
 * @param  array   ids
 */

const patch = async (endpointName, data, ids) => {
  if (config.appId) {
    const res = await fetch(Routes.httpPath(endpointName, `&ids=${ids}`), {
      method: 'PATCH',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: body(data)
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = patch
