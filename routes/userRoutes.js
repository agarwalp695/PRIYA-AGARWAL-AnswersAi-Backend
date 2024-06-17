const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../utils/authUtils");

router.get(
  "/:userId",
  authMiddleware.authenticateToken,
  userController.getUserById
);
router.get(
  "/:userId/questions",
  authMiddleware.authenticateToken,
  userController.getUserQuestions
);
router.post(
  "/",
  userController.createUser
);

module.exports = router;
