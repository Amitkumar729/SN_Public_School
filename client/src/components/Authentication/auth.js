import React, { useEffect, useState } from "react";
import GalleryAdmin from "../GalleryAdmin/galleryAdmin";

import "./auth.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple email and password check (replace with real authentication)
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL; // Replace with your admin email
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD; // Replace with your admin password
    // console.log(isAuthenticated);
    if (email === adminEmail && password === adminPassword) {
      onLogin(true);
      sessionStorage.setItem("isAuthenticated", "true");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const ProtectedGalleryAdminRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("isAuthenticated");

    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <GalleryAdmin />
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </div>
  );
};

export default ProtectedGalleryAdminRoute;
