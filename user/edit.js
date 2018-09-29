const requestWrap = require('../helpers/requestWrap')
const Routes = require('../constans/routes')
const userEdit = require('../helpers/userEdit')

module.exports = async (endpointName, data, userId, sessionToken) => {
  const userObj = await userEdit(data, sessionToken)
  return await requestWrap('patch', Routes.userEditPaht(endpointName, userId), userObj)
}
