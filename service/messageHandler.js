const api = require("./api.js");
const { parseDir, getContents, parseFile, getPackages } = api;

const handlers = {
  msg: (ws, message) => handleMsg(ws, message),
  req: (ws, message) => handleReq(ws, message)
};

function registerEventListeners(ws) {
  ws.on("message", message => {
    handleMessage(ws, message);
  });
}

function handleMessage(ws, message) {
  let msg = JSON.parse(message);
  console.log(message);

  if (handlers[msg.type] instanceof Function) {
    handlers[msg.type](ws, msg);
  } else {
    console.log("No message handler is defined for message type: ", msg.type);
  }
}

function sendMessage(ws, res) {
  const msg = JSON.stringify(res);
  ws.send(msg);
}

function handleMsg(ws, message) {
  console.log("handleMsg", message);
  sendMessage(ws, message);
}
function handleReq(ws, message) {
  console.log("handleReq", message);
  var url = "https://api.github.com/graphql";
  getContents(url).then(contents => {
    res = { success: true, contents: contents };
    sendMessage(ws, res);
  });
}

module.exports = { registerEventListeners };
