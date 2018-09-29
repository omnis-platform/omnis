const connect = require('./connect')
const email = require('./email')
const file = require('./file')
const get = require('./get')
const post = require('./post')
const patch = require('./patch')
const put = require('./put')
const remove = require('./remove')
const user = require('./user')
const config = require('./config')

module.exports = {
  connect,
  email,
  file,
  get,
  post,
  patch,
  put,
  user,
  config,
  delete: remove
}