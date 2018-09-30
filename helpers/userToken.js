const userToken = token => JSON.stringify({ data: { session_token: token }})

module.exports = userToken
