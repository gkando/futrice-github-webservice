const express = require("express");
const helmet = require("helmet");
const server = express();
const service = require("./service/service.js");
require("dotenv").config();

function logger(req, res, next) {
  console.log(`${req.method} to ${req.path}`);
  next();
}

server.use(logger);
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    api: "running",
    msg: "Github Dependency Parser API Status: UP!"
  });
});

server.use("/service", service);

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening at localhost:${port}\n`);
});
