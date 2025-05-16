const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/search.controllers");
const phantrang = require("../../controllers/client/phantrang.controllers");

router.get("/phim-:key/page-:num", phantrang.gener);
router.get("/nam-:year/page-:num", phantrang.year);
router.get("/:id/page-:num", phantrang.phim);
router.get("/tim-kiem", controller.timkiem);
module.exports = router;
