import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Designs/Home/Home";
import About from "./Components/Designs/About/About";
import Services from "./Components/Designs/Services/Services";
import Career from "./Components/Designs/Career/Career";
import Contact from "./Components/Designs/Contact/Contact";
import Login from "./Components/Designs/Login/Login";
import SignUp from "./Components/Designs/SignUp/SignUp";
import Exclusive from "./Components/Designs/Services/Exclusive";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  removeAdmin,
  removeUser,
  selectAuth,
} from "./Components/App/Slices/AuthSlice";
import AuthService from "./Components/Services/AuthService";
import AdminLogin from "./Components/Designs/Admin/AdminLogin";
import Dashboard from "./Components/Designs/Dashboard/Dashboard";
import AdminService from "./Components/Services/AdminService";

function App() {
  const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // get the token from sessionStorage
    const token = sessionStorage.getItem("accessToken");

    useEffect(() => {
      if (token)
        AuthService.validateToken()
          .then((response) => {
            console.log("Token is valid");
          })
          .catch((err) => {
            console.log("Invalid Token");
            sessionStorage.clear();
            dispatch(removeUser());
            navigate("/login");
          });
    }, []);
    // get the user from redux store
    const loggedUser = useSelector(selectAuth);

    return loggedUser && token ? children : <Navigate to="/login" />;
  };

  const AdminRoute = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // get the token from sessionStorage
    const token = sessionStorage.getItem("accessToken");

    useEffect(() => {
      if (token)
        AdminService.validateToken()
          .then((response) => {
            console.log("Token is valid");
          })
          .catch((err) => {
            console.log("Invalid Token");
            sessionStorage.clear();
            dispatch(removeAdmin());
            navigate("/login");
          });
    }, []);

    // get the user from redux store
    const loggedUser = useSelector(selectAuth);

    return loggedUser && token ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/exclusive"
          element={
            <ProtectedRoute>
              <Exclusive />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
