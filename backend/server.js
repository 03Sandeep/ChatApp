const express = require("express");
const chats = require("./data/data.js");
const env = require("dotenv");

const app = express();
env.config();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/", (req, res) => {
  res.send("Yoyo");
});
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server started on Port 5000");
});
