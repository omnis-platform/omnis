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
const Omnis = {}

Omnis.connect = connect
Omnis.email = email
Omnis.file = file
Omnis.get = get
Omnis.post = post
Omnis.patch = patch
Omnis.put = put
Omnis.delete = remove
Omnis.user = user
Omnis.config = config

module.exports = Omnis