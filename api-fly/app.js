const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DataBase = "mongodb://localhost/flyzejet";

const app = express(); // creation serveur express

// Variables pour faire correspondre aux routes
const userRoutes = require("./route/userRoute");
const profileRoutes = require("./route/profile");

// database connexion
mongoose
  .connect(DataBase, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`app is succefuly connected to flyzejet Database...`);
  })
  .catch((e) => {
    console.log(`error when trying to connect with data base flyzejet : ${e}`);
  });

app.use(express.json()); // body parser
app.use(cors()); // cors

// middleware pour faire correspondre aux routes

app.use("/api/auth", userRoutes);
app.use("/api/profile", profileRoutes);

module.exports = app;
