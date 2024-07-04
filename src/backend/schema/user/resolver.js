const User = require("./model");

async function getUsers() {
  try {
    const result = await User.find({});
    return result;
  } catch (error) {
    throw new Error(`Error when getting all users: ${error}`);
  }
}

async function getUserById(id) {
  try {
    const result = await User.findById(id);
    return result;
  } catch (error) {
    throw new Error(`Error when getting user by id: ${error}`);
  }
}

async function getUserByUsername(username) {
  try {
    const result = await User.find({ username: username }).exec();
    return result;
  } catch (error) {
    throw new Error(`Error when getting user by username: ${error}`);
  }
}

async function setUser(email, username, password) {
  try {
    const newData = new User({
      email: email,
      username: username,
      password: password,
      role: 1,
    });

    await newData.save();
  } catch (error) {
    throw new Error(`Error when setting data user: ${error}`);
  }
}

async function removeUser(id) {
  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error when removing user: ${error}`);
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  setUser,
  removeUser,
};
