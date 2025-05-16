const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/watchmain.controllers");
router.get("/:id", controller.index);

module.exports = router;
