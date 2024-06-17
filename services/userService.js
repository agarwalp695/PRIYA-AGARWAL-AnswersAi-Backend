const userModel = require("../models/userModel");

const getUserById = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUser = async (email, password, name) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    return newUser;
  } catch (err) {
    throw new Error("Failed to create user");
  }
};

module.exports = {
  getUserById,
  createUser,
};
