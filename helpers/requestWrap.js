const axios = require('./axios')
const config = require('../config')

module.exports = async (method, path, body = {}) => {
  if (config.appId) { 
    const { data } = await axios[method](path, body)
    return await data
  } else { console.error("omnis.json doesn't exist") }
}