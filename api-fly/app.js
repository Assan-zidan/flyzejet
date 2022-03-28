const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DataBase = "mongodb://localhost/flyzejet";

const app = express(); // creation serveur express

// Variables pour faire correspondre aux routes
const userRoutes = require("./route/userRoute");

// database connexion
mongoose
  .connect(DataBase, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`app is succefuly connected to flyzejzt Database...`);
  })
  .catch((e) => {
    console.log(`error when trying to connect with data base flyzejzt : ${e}`);
  });

app.use(express.json()); // body parser
app.use(cors()); // cors

// middleware pour faire correspondre aux routes

app.use("/api/auth", userRoutes);

module.exports = app;
