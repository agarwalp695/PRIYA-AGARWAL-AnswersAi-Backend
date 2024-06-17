const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");
const authMiddleware = require("../utils/authUtils");

router.post(
  "/",
  authMiddleware.authenticateToken,
  questionController.askQuestion
);
router.get(
  "/:questionId",
  authMiddleware.authenticateToken,
  questionController.getQuestionById
);

module.exports = router;
