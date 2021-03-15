const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    api: "running",
    msg: "Github Dependency Parser API Status: Up"
  });
});

module.exports = router;
