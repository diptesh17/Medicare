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
  const { email, password } = req.body;

  try {
    // Check for null fields
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Fields can't be Null",
      });
    }

    // Find the user in the database
    const getUser = await User.findOne({ email });
    if (!getUser) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare the current and stored password
    const comparePass = await bcrypt.compare(password, getUser.password);

    if (!comparePass) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        userId: getUser._id,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Successfully logged in :)",
      token: token,
    });
  } catch (error) {
    console.error("Something went wrong in login controller:", error.message);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const medicinesData = [
  {
    symptom: "Fever",
    medicines: ["Paracetamol", "Ibuprofen"],
  },
  {
    symptom: "Cough",
    medicines: ["Dextromethorphan", "Guaifenesin"],
  },
  // Add more symptom-medicine pairs as needed
];

exports.medicines = async (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || !Array.isArray(symptoms)) {
    return res.status(400).json({
      success: false,
      message: "No symptoms provided or symptoms is not an array",
    });
  }

  try {
    const matchedMedicines = symptoms.reduce((acc, symptom) => {
      const found = medicinesData.find(
        (item) => item.symptom.toLowerCase() === symptom.toLowerCase()
      );
      if (found) {
        acc.push(...found.medicines);
      }
      return acc;
    }, []);

    if (matchedMedicines.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No medicines found for the provided symptoms",
      });
    }

    return res.status(200).json({
      success: true,
      medicines: matchedMedicines,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching medicines",
    });
  }
};
