const User = require("../user/model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

async function login(username, password, res) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(200).send({ status: false, message: 'Username cannot be found!' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(200).send({ status: false, message: 'Invalid password!' });
    }

    const tokenPayload = { username: user.username, role: user.role };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, { expiresIn: '3h' });

    res.cookie('access', token, { httpOnly: true, secure: false, sameSite: 'strict', maxAge: 72 * 60 * 60 * 1000});

    return res.status(200).send({ status: true, message: '' });
  } catch (error) {
    return res.status(200).send({ status: false, message: 'Something wrong, please try again!' }) 
  }
}

async function register(email, username, password) {
  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return { status: false, message: 'Username or Email is already taken!' }
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ username, password: hashedPassword, email, role: 1 });

    await user.save();

    return { status: true, message: 'Congratulations your account is just registered!' } 
  } catch (error) {
    return { status: false, message: 'Something wrong, please try again!' }
  }
}

module.exports = {
  login, register
};
