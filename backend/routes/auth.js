const express = require("express");
const { login, signup, medicines, message } = require("../controllers/Auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/medicines", medicines);
router.post("/message", message);

module.exports = router;
