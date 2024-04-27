const express = require("express");
const db = require('./db');
const app = express();
const PORT = 5000;

app.set("view engine", "ejs")

// CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// STATICS
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello world");
});


app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`)
});






