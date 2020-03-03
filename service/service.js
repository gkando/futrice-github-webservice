const express = require("express");
const service = express.Router();
const acorn = require("acorn");
const jsx = require("acorn-jsx");
const api = require("./api.js");
service.use(express.json());
const { parseDir, getContents, parseFile, getPackages } = api;

// Goal -> Show file dependencies for a given repo
// (1) Req to repo endpoint with url to github repository
// (2) Fetch repository & list only folders and js files
// (3) User selects file or directory (back to step 1 w/ subdir)
// (4) Fetch file & get imports
// (5) Filter out  packages from package.json
// (6) Return list of file dependencies

service.post("/repo", checkURL, (req, res, next) => {
  getContents(req.body.url, parseDir).then(contents => {
    res.status(200).json({
      success: true,
      contents: contents
    });
  });
});

service.post("/contents", checkURL, validFile, async (req, res, next) => {
  try {
    const unfiltered = await getContents(req.body.url, parseFile);
    const packages = await getPackages(req.body.url);
    const dependencies = unfiltered.filter(f => !packages.includes(f));
    res.json(dependencies);
  } catch (err) {
    res.status(500).json({ message: "Failed to get contents" });
  }
});

//middleware

// check req.body for url
function checkURL(req, res, next) {
  if (req.body.url === undefined) {
    res.status(400).json({
      success: false,
      message: "Invalid URL"
    });
  } else {
    next();
  }
}

// check req.body for url
function validFile(req, res, next) {
  if (req.body.type !== "file") {
    res.status(400).json({
      success: false,
      message: "Invalid URL"
    });
  } else {
    next();
  }
}
module.exports = service;
