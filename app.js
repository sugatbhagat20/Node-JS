const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");
const successRoutes = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(shopRoutes);
app.use("/admin", adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(4000);
