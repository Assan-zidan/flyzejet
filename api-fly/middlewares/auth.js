const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

// verifie l'authentification d'une requete ayant le token en header et l'id de la personne en params
/*
  elle permet a la prochaine fonction du middleware d'exploiter les informations de la personne 
  dans la variable req.userInformations
*/

// exports.jwtAuth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const decodedToken = jwt.verify(token, TOKEN_SECRET_KEY);
//     const { ...userInformation } = decodedToken.playload;
//     req.userInformation = userInformation;
//     if (req.params.id !== userInformation.Id) {
//        res.status(403).json({ error: "Invalid user ID" });
//     } else {
//       next();
//     }
//   } catch {
//      res.status(401).json({ error: "Invalid request!" });
//   }
// };


exports.jwtAuth = (req, res, next) => {
  try {
     const token = req.headers.authorization.split(' ')[1]
     const decodedToken = jwt.verify(token, TOKEN_SECRET_KEY)
     const { ...userInformation } = decodedToken.playload
     req.userInformation = userInformation
     if (req.params.id !== userInformation.Id) {
        res.status(403).send('Invalid user ID')
     } else {
        next()
     }
  } catch {
     res.status(401).send('Invalid request!')
  }
}