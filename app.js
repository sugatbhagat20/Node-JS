// Project: -

// When the user hits url ==> "/login" .Show a form to the user to enter his username.

// Once the user enters the username store it in the browser's local storage. Check hints if you are stuck.
// Redirect the user to url ==> "/" and show him the send message form.
// Once the user sends a message store it in the file as "username": "message", so that you have an idea who sent the message.
// While reading the message from the file now show who sent the message.
// Now open another tab in incognito and login via a different username. On sending message now this application works like a group chat.Congratulations!!!!
// Check Hint 2 if you are stuck for very long but try by yourself first.

const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const loginRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(chatRoutes);

app.listen(3000);
