const token = require('../helpers/token')

module.exports = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Origin': 'omnis-platform.com',
  'X-Auth-Token': token()
})