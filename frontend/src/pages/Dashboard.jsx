import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Brand from "./Doctor.jpg"; // Replace with your 3D image

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
      {" "}
      {/* Gradient background */}
      <Navbar />
      <div className="flex-grow flex">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center p-8 w-1/2 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2 text-center text-blue-800 font-serif">
            {" "}
            {/* Darker blue for welcome */}
            Welcome to
          </h1>
          <h2 className="text-3xl font-semibold text-center text-purple-800 font-serif">
            {" "}
            {/* Darker purple for medical name */}
            Shree Swami Samarth Medical
          </h2>
          {/* Cycling Slogan */}
          <p className="mt-4 text-lg text-center text-gray-700 opacity-90 transition-opacity duration-1000">
            {" "}
            {/* Darker gray for slogan */}
            {slogans[currentSloganIndex]}
          </p>
        </div>
        {/* Right Section */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Brand}
            alt="3D Image"
            className="max-h-96 w-auto object-contain" // Set max height and maintain aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
