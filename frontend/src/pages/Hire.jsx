import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const Hire = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center p-4 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl mb-6 text-center font-semibold">Hire Me</h2>
          <div className="flex flex-col mb-4">
            <a
              href="https://www.linkedin.com/in/diptesh017"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 text-blue-600 hover:underline"
            >
              <LinkedIn className="mr-2" fontSize="large" /> LinkedIn
            </a>
            <a
              href="https://github.com/diptesh17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 text-gray-700 hover:underline"
            >
              <GitHub className="mr-2" fontSize="large" /> GitHub
            </a>
            <a
              href="mailto:deorediptesh1883@gmail.com"
              className="flex items-center mb-2 text-green-600 hover:underline"
            >
              <Email className="mr-2" fontSize="large" /> Email
            </a>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/19_xPX0b2NENoMJPrJnzLdPBM7ZSE2Rrh/view"
              )
            }
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
