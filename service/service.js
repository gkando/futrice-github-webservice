const express = require("express");
const service = express.Router();
const acorn = require("acorn");
const jsx = require("acorn-jsx");
const api = require("./helpers.js");
service.use(express.json());
const { parseDir, getContents } = api;
// Goal -> Show file dependencies for a given repo
// (1) User input repo
// (2) Fetch repo & list contents
// (3) User select file
// (4) Fetch file
// (5) Parse file

service.post("/repo", parseURL, (req, res, next) => {
  console.log(req.body.url);
  getContents(req.body.url, parseDir).then(r => {
    res.status(200).json({
      success: true,
      dirs: r
    });
  });

  // console.log(r);
});

//middleware

function parseURL(req, res, next) {
  // console.log(req.body);
  if (req.body.url === undefined) {
    res.status(400).json({
      success: false,
      message: "Invalid URL"
    });
  } else {
    next();
  }
}
module.exports = service;
