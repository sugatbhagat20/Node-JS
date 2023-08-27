const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

module.exports = router;
