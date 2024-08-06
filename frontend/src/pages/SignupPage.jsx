import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Signup successful! Please log in.");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-lg w-full max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-semibold mb-6 text-center text-blue-700"
        >
          Sign Up
        </motion.h2>
        <AuthForm type="signup" handleSubmit={handleSubmit} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-center"
        >
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Click here to log in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
