const express = require("express");

const route = express.Router();

route.get("/login", (req, res, next) => {
  res.send(
    "<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/login' method='POST'><input type='text' name='username' placeholder='Username'  id='username'><button type='submit'>Login</button></form>"
  );
});

route.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = route;
