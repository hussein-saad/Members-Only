const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");


router.get("/messages",messageController.allMessagesGET);

router.get("/message/:id",messageController.messageGET);


router.get("/message/create",messageController.messageCreateGET);
router.post("/message/create",messageController.messageCreatePOST);

router.get("/message/:id/delete",messageController.messageDeleteGET);
router.post("/message/:id/delete",messageController.messageDeletePOST);

router.get("/message/:id/update",messageController.messageUpdateGET);
router.post("/message/:id/update",messageController.messageUpdatePOST);


module.exports = router;
