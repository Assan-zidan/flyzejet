const express = require("express");
const { signup, login } = require("../controllers/user");
const { jwtAuth } = require("../middlewares/auth");
const User = require("../models/User");


const router = express.Router();

router.get("/:id", jwtAuth, (req, res) => {
    const userInfo = req.userInformation
    res.status(200).json({ message: 'this user have access to this ressource', userInfo})
});
router.post("/signup", signup);
router.post("/login", login);


module.exports = router;