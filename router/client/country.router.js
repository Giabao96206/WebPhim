const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/search.controllers");
const phantrang = require("../../controllers/client/phantrang.controllers");

router.get("/:country", controller.country);
router.get("/:country/page-:num", phantrang.country);

module.exports = router;
