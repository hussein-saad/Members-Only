const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/user/:id", userController.userInfo);

router.get("user/:id/signup", userController.userSignupGET);
router.post("user/:id/signup", userController.userSignupPOST);

router.get("user/:id/login", userController.userLoginGET);
router.post("user/:id/login", userController.userLoginPOST);

router.get("/user/:id/edit", userController.userEditGET);
router.post("/user/:id/edit", userController.userEditPOST);

router.get("/user/:id/delete", userController.userDeleteGET);
router.get("/user/:id/delete", userController.userDeletePOST);

router.get("user/:id/logout", userController.userLogoutGET);

module.exports = router;
