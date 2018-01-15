const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const userEdit = require('../helpers/userEdit')

const edit = async (endpointName, data, userId, sessionToken) => {
  if (config.appId) {
    const userObj = await userEdit(data, sessionToken)

    const res = await fetch(Routes.userEditPaht(endpointName, userId), {
      method: 'PATCH',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: userObj
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = edit
