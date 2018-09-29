
const axios = require('axios')
const token = require('./token')

const instance = axios.create({
  baseURL: 'https://cloud.omnis-platform.com/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': 'omnis-platform.com',
    'X-Auth-Token': token()
  }
})

module.exports = instance