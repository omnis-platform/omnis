const create = require('./create')
const login = require('./login')
const logout = require('./logout')
const show = require('./show')
const remove = require('./remove')
const edit = require('./edit')
const resetPassword = require('./resetPassword')
const passwordUpdate = require('./passwordUpdate')

const user = {}

user.create = create
user.login = login
user.logout = logout
user.show = show
user.delete = remove
user.edit = edit
user.resetPassword = resetPassword
user.passwordUpdate = passwordUpdate

module.exports = user
