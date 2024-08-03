const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const db = require("./config/database");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

db.connect();
// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route handler
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log(`Running on Port : ${PORT}`);
});
