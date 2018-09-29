const create = require('./create')
const login = require('./login')
const logout = require('./logout')
const show = require('./show')
const remove = require('./remove')
const edit = require('./edit')
const resetPassword = require('./resetPassword')
const passwordUpdate = require('./passwordUpdate')

module.exports = {
  create,
  login,
  logout,
  show,
  edit,
  resetPassword,
  passwordUpdate,
  delete: remove
}
