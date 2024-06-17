const userService = require("../services/userService");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserQuestions = async (req, res) => {
  try {
    const userId = req.params.userId;
    res.status(200).json({ message: `Fetching questions for user ${userId}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await userService.createUser(email, password, name);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUserById,
  getUserQuestions,
  createUser,
};
