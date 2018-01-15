const path = require('path')
const configPath = path.join(process.cwd(), 'omnis.json')
const config = require(configPath)

module.exports = config
