const authService = require("../services/authService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);
    res.status(200).json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    await authService.logout(refreshToken);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await authService.refresh(refreshToken);
    res.status(200).json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  login,
  logout,
  refresh,
};
