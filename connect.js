const WebSocket = require('ws')
const config = require('./config')
const Routes = require('./constans/routes')
const WebsocketSubscribe = require('./constans/WebsocketSubscribe')

/**
 * connect method return an function onmessage
 * example Omnis.connect('endpointName').onmessage = res => console.log(res)
 * @param  string  endpointName
 */

const connect = endpointName => {
  if (config.appId) {
    const socket = new WebSocket(Routes.websoketPath(endpointName, config.apiKey))

    socket.onopen = () => socket.send(WebsocketSubscribe)
  
    return socket
  } else {
    console.error("omnis.json doesn't exist")
  }
}

module.exports = connect