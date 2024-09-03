import React, { useState } from "react";
import GalleryAdmin from "../GalleryAdmin/galleryAdmin";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple email and password check (replace with real authentication)
    const adminEmail = "admin@example.com"; // Replace with your admin email
    const adminPassword = "admin123"; // Replace with your admin password

    if (email === adminEmail && password === adminPassword) {
      onLogin(true);
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
