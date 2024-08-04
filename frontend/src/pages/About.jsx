// About.jsx
import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          At Shree Swami Samarth Medical, we are dedicated to providing
          top-quality healthcare services. Our mission is to improve the health
          and well-being of our community.
        </p>
        <div className="flex flex-wrap justify-center items-stretch gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver compassionate and comprehensive healthcare services
              with a focus on excellence and innovation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a leading healthcare provider, recognized for our commitment
              to patient-centered care and community well-being.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Team
            </h3>
            <p className="text-gray-600">
              Our team comprises experienced doctors, nurses, and support staff
              who are dedicated to providing exceptional healthcare services. We
              work together to ensure the best outcomes for our patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
