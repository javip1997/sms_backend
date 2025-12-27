const express = require("express");
const router = express.Router();
const { signup, login, profile } = require("../controllers/auth.controller");
const auth = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", auth, profile);

router.get("/check-user", auth, (req, res) => {
  res.json({ role: "user" });
});

router.get("/check-admin", auth, (req, res) => {
  res.json({ role: "admin" });
});

module.exports = router;
