import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ element: Component }) => {
  const token = localStorage.getItem("token");
  return token ? <Component /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={Dashboard} />}
        />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="/help" element={<PrivateRoute element={Help} />} />
        <Route path="/contact" element={<PrivateRoute element={Contact} />} />
      </Routes>
    </Router>
  );
};

export default App;
