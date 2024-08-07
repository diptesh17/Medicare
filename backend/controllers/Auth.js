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
    medicines: ["Paracetamol", "Ibuprofen", "Aspirin"],
  },
  {
    symptom: "Cough",
    medicines: ["Dextromethorphan", "Guaifenesin", "Honey"],
  },
  {
    symptom: "Headache",
    medicines: ["Ibuprofen", "Aspirin", "Acetaminophen"],
  },
  {
    symptom: "Nausea",
    medicines: ["Ondansetron", "Meclizine", "Promethazine"],
  },
  {
    symptom: "Sore Throat",
    medicines: ["Throat Lozenges", "Gargling Salt Water", "Ibuprofen"],
  },
  {
    symptom: "Cold",
    medicines: ["Antihistamines", "Decongestants", "Cough Syrup"],
  },
  {
    symptom: "Stomach Pain",
    medicines: ["Antacids", "Simethicone", "Loperamide"],
  },
  {
    symptom: "Diarrhea",
    medicines: ["Loperamide", "Bismuth Subsalicylate", "Probiotics"],
  },
  {
    symptom: "Constipation",
    medicines: ["Laxatives", "Fiber Supplements", "Miralax"],
  },
  {
    symptom: "Allergies",
    medicines: ["Antihistamines", "Nasal Sprays", "Eye Drops"],
  },
  {
    symptom: "Muscle Pain",
    medicines: ["Ibuprofen", "Acetaminophen", "Topical Analgesics"],
  },
  {
    symptom: "Joint Pain",
    medicines: ["Naproxen", "Glucosamine", "Chondroitin"],
  },
  {
    symptom: "Skin Rash",
    medicines: ["Hydrocortisone Cream", "Antihistamines", "Moisturizers"],
  },
  {
    symptom: "Acne",
    medicines: ["Benzoyl Peroxide", "Salicylic Acid", "Retinoids"],
  },
  {
    symptom: "Asthma",
    medicines: ["Albuterol Inhaler", "Corticosteroids", "Montelukast"],
  },
  {
    symptom: "Heartburn",
    medicines: ["Antacids", "H2 Blockers", "Proton Pump Inhibitors"],
  },
  {
    symptom: "Fatigue",
    medicines: ["Iron Supplements", "Vitamin B12", "Caffeine"],
  },
  {
    symptom: "Anxiety",
    medicines: ["SSRIs", "Benzodiazepines", "Natural Supplements"],
  },
  {
    symptom: "Depression",
    medicines: ["SSRIs", "SNRIs", "Therapy"],
  },
  {
    symptom: "Insomnia",
    medicines: ["Melatonin", "Diphenhydramine", "Zolpidem"],
  },
  {
    symptom: "Weight Loss",
    medicines: [
      "Appetite Suppressants",
      "Nutritional Supplements",
      "Metformin",
    ],
  },
  {
    symptom: "Weight Gain",
    medicines: ["Appetite Stimulants", "Nutritional Supplements", "Steroids"],
  },
  {
    symptom: "Flu",
    medicines: ["Oseltamivir", "Zinc Supplements", "Decongestants"],
  },
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
