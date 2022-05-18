const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { validate } = require("../config/validator");

//ADDING A USER

const newUser = async (req, res) => {
  const { username, email, password } = req.body;
  const valid = await validate({ username, email, password });
  if (valid) {
    const hashedPassword = await bcrypt.hash(valid.password, 8);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "user created",
      savedUser,
    });
  } else {
    res.status(400).json({
      message: "Invalid data",
    });
  }
};

// user log in
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "Account not found",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        error: true,
        message: "Invalid password",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User logged in",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again.",
    });
  }
}

//getting a user
const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

module.exports = { newUser, getUsers, loginUser };
