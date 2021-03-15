const express = require("express");
const http = require("http");
const router = require("./service/router");
const wsServer = require("./service/webSocketServer");
const app = express();

app.use(express.json());
const server = http.createServer(app);

function logger(req, res, next) {
  console.log(`${req.method} to ${req.path}`);
  next();
}

app.use(logger);
app.use(router);
wsServer(server);

server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

// connection.on('close', function(connection) {
//   console.log((new Date()) + " Peer " + userID + " disconnected.");
//   const json = { type: typesDef.USER_EVENT };
//   userActivity.push(`${users[userID].username} left the document`);
//   json.data = { users, userActivity };
//   delete clients[userID];
//   delete users[userID];
//   sendMessage(JSON.stringify(json));
// });

// const express = require("express");
// const helmet = require("helmet");
// const server = express();
// const cors = require("cors");
// const service = require("./service/service.js");
// require("dotenv").config();

// function logger(req, res, next) {
//   console.log(`${req.method} to ${req.path}`);
//   next();
// }

// server.use(logger);
// server.use(helmet());
// server.use(cors());
// server.use(express.json());

// server.use("/service", service);

// server.get("/", (req, res) => {
//   res.status(200).json({
//     api: "running",
//     msg: "Github Dependency Parser API Status: Up"
//   });
// });

// const port = process.env.PORT || 3300;
// server.listen(port, () => {
//   console.log(`\n=== Server listening at localhost:${port}\n`);
// });

// var express = require("express"),
//   //set an instance of exress
//   app = express();

// app.get("/", (req, res) => {
//   // res.write("Hello\n");
//   res.write("Hello" + " ".repeat(1024) + "\n");

//   setTimeout(() => {
//     res.write("World");
//     res.end();
//   }, 12000);
// });
