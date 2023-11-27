const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/signup", userController.userSignupGet);
router.post("/signup", userController.userSignupPost);

router.get("/login", userController.userLoginGet);
router.post("/login", userController.userLoginPost);

router.get("/logout", userController.userLogoutGet);


module.exports = router;
