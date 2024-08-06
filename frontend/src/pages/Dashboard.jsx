import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Brand from "./Doctor.jpg"; // Replace with your 3D image
import { motion } from "framer-motion";

const slogans = [
  "Committed to Excellence in Healthcare",
  "Your Health, Our Priority",
  "Empowering Wellness for All",
];

const Dashboard = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000); // Change slogan every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar />
      <div className="flex-grow flex">
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center p-8 w-1/2 bg-white rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold mb-2 text-center text-blue-800 font-serif">
            Welcome to
          </h1>
          <h2 className="text-3xl font-semibold text-center text-purple-800 font-serif">
            Shree Swami Samarth Medical
          </h2>
          <motion.p
            key={currentSloganIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg text-center text-gray-700 opacity-90 transition-opacity duration-1000"
          >
            {slogans[currentSloganIndex]}
          </motion.p>
        </motion.div>
        {/* Right Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-center items-center"
        >
          <img
            src={Brand}
            className="max-h-96 w-auto object-contain" // Set max height and maintain aspect ratio
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
