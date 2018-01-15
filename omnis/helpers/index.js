const body = require('./body')
const fileObject = require('./fileObject')
const idsQuery = require('./idsQuery')
const query = require('./query')
const token = require('./token')
const upadatePassword = require('./updatePassword')
const user = require('./user')
const userEdit = require('./userEdit')
const userToken = require('./userToken')
const helpers = {}

helpers.body = body
helpers.fileObject = fileObject
helpers.idsQuery = idsQuery
helpers.query = query
helpers.token = token
helpers.upadatePassword = upadatePassword
helpers.user = user
helpers.userEdit = userEdit
helpers.userToken = userToken

module.exports = helpers