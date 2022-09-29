const express = require("express");
const gameController = require("../../controllers/gameController");

const router = express.Router();

router.get("/", gameController.playGame);
router.get("/:folder/:file", gameController.gameFiles);

module.exports = router;