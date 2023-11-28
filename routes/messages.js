const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");


router.get("/",messageController.allMessagesGET);



router.get("/create",messageController.messageCreateGET);
router.post("/create",messageController.messageCreatePOST);

router.get("/:id",messageController.messageGET);

router.get("/:id/delete",messageController.messageDeleteGET);
router.post("/:id/delete",messageController.messageDeletePOST);

router.get("/:id/update",messageController.messageUpdateGET);
router.post("/:id/update",messageController.messageUpdatePOST);


module.exports = router;
