const User = require("../models/User");
const bcrypt = require("bcrypt");
const TokenGeneration = require("../middlewares/tokengeneration");
const dotenv = require("dotenv");

dotenv.config();
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;


exports.signup = (req, res, next) => {
    User.findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (user) {
        return res.status(401).json({ message: " Cette Adresse mail est deja utilise !" });
      } else {
        if (req.body.password === req.body.passwordVerif) {
          bcrypt.hash(req.body.password, 10).then((passwordHash) => {
            const user = new User({
              ...req.body,
            });
            user.password = passwordHash;
            user
              .save()
              .then((result) =>
                res
                  .status(201)
                  .json({ message: " Utilisateur enregistré  avec success ! " })
              )
              .catch((error) => res.status(400).json({ error }));
          });
        } else {
          return res
            .status(401)
            .json({ message: "Les Mots de passe saisient sont differents !" });
        }
      }
    })
    .catch((error) =>
      res
        .status(500)
        .json({ message: "vous devez des informations unique et valides" })
    );
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Utilisateur inexistant !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ message: "Mot de passe incorrect !" });
          }
          const userInfo = {
            Id: user._id,
            Nom: user.nom,
            Prenom: user.prenom,
            Email: user.email,
            type: user.type
          };
          res.status(200).json({
            userInfo,
            userId: user._id,
            token: TokenGeneration(userInfo, TOKEN_SECRET_KEY, "24h"),
          });
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    })
    .catch((error) => res.status(500).json({ error }));
};
