import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";

const AuthForm = ({ type, handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      {type === "signup" && (
        <div className="mb-4 flex items-center">
          <Person className="mr-2" />
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="mb-4 flex items-center">
        <Email className="mr-2" />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex items-center">
        <Lock className="mr-2" />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {type === "login" ? "Log In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;
