const express = require("express");
const fs = require("fs");
const { message } = require("statuses");
const route = express.Router();

route.get("/", (req, res, next) => {
  fs.readFile("chat.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "chat is empty";
    }
    res.send(
      `${data}<form action='/' onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method='POST'><input type='text' name='message' id='message'><input name='username' id='username' type='hidden'><button type='submit' >Send</button></form>`
    );
  });
});

route.post("/", (req, res) => {
  //   console.log(req.body);
  //   console.log(req.body.message);
  fs.writeFile(
    "chat.txt",
    `${req.body.username}:${req.body.message}`,
    { flag: "a" },
    (err) => console.log(err)
  );

  res.redirect("/");
});

module.exports = route;
