import React from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Person, Email, Message } from "@mui/icons-material";

const Contact = () => {
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
