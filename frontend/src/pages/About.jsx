import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-8"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-center text-blue-600 mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-center text-gray-700 mb-8"
        >
          At Shree Swami Samarth Medical, we are dedicated to providing
          top-quality healthcare services. Our mission is to improve the health
          and well-being of our community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center items-stretch gap-8 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver compassionate and comprehensive healthcare services
              with a focus on excellence and innovation.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a leading healthcare provider, recognized for our commitment
              to patient-centered care and community well-being.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-xs"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Team
            </h3>
            <p className="text-gray-600">
              Our team comprises experienced doctors, nurses, and support staff
              who are dedicated to providing exceptional healthcare services. We
              work together to ensure the best outcomes for our patients.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
