import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";

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
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">
          Sign Up
        </h2>
        <AuthForm type="signup" handleSubmit={handleSubmit} />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Click here to log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
