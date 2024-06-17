const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { JWT_SECRET, JWT_EXPIRATION } = require("../config");

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  return { accessToken, refreshToken };
};

const logout = async () => {
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
};

const refresh = async (refreshToken) => {
  const decoded = jwt.verify(refreshToken, JWT_SECRET);
  if (!decoded.userId) {
    throw new Error("Invalid refresh token");
  }
  const accessToken = generateAccessToken(decoded.userId);
  return { accessToken };
};

function generateAccessToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

function generateRefreshToken(userId) {
  const refreshToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
  return refreshToken;
}

module.exports = {
  login,
  logout,
  refresh,
};
