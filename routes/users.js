const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/signup", userController.userSignupGET);
router.post("/signup", userController.userSignupPOST);

router.get("/login", userController.userLoginGET);
router.post("/login", userController.userLoginPOST);

router.get("/logout", userController.userLogoutGET);

router.get("/:id", userController.userInfo);



router.get("/:id/edit", userController.userEditGET);
router.post("/:id/edit", userController.userEditPOST);

router.get("/:id/delete", userController.userDeleteGET);
router.get("/:id/delete", userController.userDeletePOST);


module.exports = router;
