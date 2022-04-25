const router = require("express").Router();
const { jwtAuth } = require("../middlewares/auth");

const {
  UpdateProfile,
  delProfile,
  getProfile,
} = require("../controllers/profile");



router.get("/:id", jwtAuth, getProfile);
router.put("/:id", jwtAuth, UpdateProfile);
router.delete("/:id", jwtAuth, delProfile);

module.exports = router;
