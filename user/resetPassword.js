const fetch = require('node-fetch')
const config = require('../config')
const Routes = require('../constans/routes')
const REQUEST_HEADER = require('../constans/requestHeaders')
const body = require('../helpers/body')

const resetPassword = async (endpointName, email) => {
  if (config.appId) {
    const res = await fetch(Routes.userResetPasswordPath(endpointName), {
      method: 'POST',
      headers: REQUEST_HEADER(),
      mode: 'cors',
      body: body({ email: email })
    })

    return await res.json()
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = resetPassword
