const config = require('../config')

const token = () => {
  let token = null
  const conf = config
  let string = `${conf.userSecret}${conf.appId}${conf.apiKey}${conf.app}`

  if (typeof module === 'object' && module.exports) {
    token = Buffer.from(string).toString('base64')
  } else {
    token = btoa(string)
  }

  return token
}

module.exports = token
