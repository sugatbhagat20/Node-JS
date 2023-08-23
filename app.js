const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Inside the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Inside another middleware");
  res.send("{ key1: value }");
});

app.listen(4000);
