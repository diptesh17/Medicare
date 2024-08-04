// Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Welcome to Shree Swami Samarth Medical
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Providing comprehensive healthcare services with compassion and
          excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600">
              Our team of experienced doctors ensures you receive the best care.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Modern Facilities
            </h3>
            <p className="text-gray-600">
              State-of-the-art equipment for accurate diagnostics and treatment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock medical assistance and support for all your needs.
            </p>
          </div>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full shadow hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
