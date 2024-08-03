const User = require("../model/User");

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

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    console.log(newUser);

    return res.status(200).json({
      success: true,
      message: "User Created",
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
