const WebSocket = require("ws");
const helpers = require("./helpers");
const messageHandler = require("./messageHandler");

const connections = {};

function webSocketServer(server) {
  const wsServer = new WebSocket.Server({ server });
  // const connection = request.accept(null, request.origin);
  wsServer.on("connection", ws => {
    helpers.new(ws, connections);
    messageHandler.registerEventListeners(ws);
    console.log(Object.keys(connections).length);

    console.log("connected: " + "new" + " in " + Object.keys(connections));
    ws.isAlive = true;
    ws.on("pong", () => {
      ws.isAlive = true;
    });

    ws.send("Hi there, I am a WebSocket server");

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}

// setInterval(() => {
//   wsServer.clients.forEach(ws => {
//     if (!ws.isAlive) {
//       console.log(ws, "CLOSED");
//       return ws.terminate();
//     }
//     ws.isAlive = false;
//     ws.ping(null, false, true);
//   });
// }, 10000);

module.exports = webSocketServer;
