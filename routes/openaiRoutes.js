const express = require("express");
const {
  summaryController,
  paragraphController,
  chatBotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatBotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

module.exports = router;