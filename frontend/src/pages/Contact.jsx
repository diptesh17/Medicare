import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Person, Email, Message } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      // Load Tawk.to script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://embed.tawk.to/66b0b2391601a2195ba0ec02/1i4h3gcn0"; // Your Tawk.to script
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]); // Run effect when the pathname changes

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center p-4 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl mb-6 text-center font-semibold">
            Contact Us
          </h2>
          <form>
            <Box className="mb-4">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <Person className="mr-2" />,
                }}
              />
            </Box>
            <Box className="mb-4">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <Email className="mr-2" />,
                }}
              />
            </Box>
            <Box className="mb-4">
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  startAdornment: <Message className="mr-2" />,
                }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
