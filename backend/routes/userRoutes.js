const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { registerUser } = require("../controllers/userController");

router.post("/", upload.single("profilePhoto"), registerUser);

module.exports = router;
