const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/watchtapphim.controllres");
router.get("/:slug/:id", controller.index);

module.exports = router;
