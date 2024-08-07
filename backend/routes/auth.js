const express = require("express");
const { login, signup, medicines } = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/medicines", medicines);

module.exports = router;
