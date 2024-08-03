const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// JWT secret key
const JWT_SECRET = process.env.JWT;

exports.signup = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // 1 - Not null
    if (!name || !email || !password) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login to continue.",
      });
    }

    // Addition process begin

    /* 
    - Hash Pass
    - Create new user with hash pass
    - Generate JWT token
    */

    // Hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create new user with hash pass

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    console.log(newUser);

    // Generate a JWT token

    const token = jwt.sign(
      {
        userId: newUser._id,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      success: true,
      message: "User Created",
      token: token,
    });
  } catch (error) {
    console.log("Something went wrong in signup controller");
  }
};

exports.login = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(401).send({
        success: false,
        message: "Fields can't be Null",
      });
    }

    // Find in DB
  } catch (error) {
    console.log("Something went wrong in login controller");
  }
};
