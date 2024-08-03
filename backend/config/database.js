const mongoose = require("mongoose");
require("dotenv").config();

// function to connect db
exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database connected :)"))
    .catch((error) => console.error("MongoDB connection error:", error));
};
