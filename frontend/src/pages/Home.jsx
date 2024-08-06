import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
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
          Welcome to Shree Swami Samarth Medical
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-center text-gray-700 mb-8"
        >
          Providing comprehensive healthcare services with compassion and
          excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600">
              Our team of experienced doctors ensures you receive the best care.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Modern Facilities
            </h3>
            <p className="text-gray-600">
              State-of-the-art equipment for accurate diagnostics and treatment.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock medical assistance and support for all your needs.
            </p>
          </motion.div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 text-white py-2 px-4 rounded-full shadow hover:bg-blue-700"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
