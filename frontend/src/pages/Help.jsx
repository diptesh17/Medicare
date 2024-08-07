import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

const Help = () => {
  const [symptom, setSymptom] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/medicines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms: symptom.split(",").map((s) => s.trim()), // Split by comma and trim whitespace
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch medicines");
      }

      const data = await response.json();
      setMedicines(data.medicines);
      setError("");
      toast.success("Medicines fetched successfully!"); // Success toast
    } catch (err) {
      setError(err.message);
      setMedicines([]);
      toast.error(err.message || "Error fetching medicines!"); // Error toast
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <Navbar />
      <ToastContainer /> {/* Add ToastContainer for notifications */}
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-white mb-8"> Virtual Doctor</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="symptom"
            >
              Enter Symptoms (comma-separated):
            </label>
            <input
              type="text"
              id="symptom"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Get Medicines
          </button>
        </form>
        {error && <p className="mt-4 text-red-600">{error}</p>}
        {medicines.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Recommended Medicines
            </h2>
            <ul className="list-disc list-inside">
              {medicines.map((medicine, index) => (
                <li key={index} className="text-gray-700 text-lg">
                  {medicine}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;
