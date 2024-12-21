import React, { useState } from "react";
import { login, signup, logout } from "../lib/authHelpers";

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      alert(`Welcome back, ${user.email}!`);
    } catch (error: any) {
      alert(`Login failed: ${error.message}`);
    }
  };

  const handleSignup = async () => {
    try {
      const user = await signup(email, password);
      alert(`Account created for ${user.email}!`);
    } catch (error: any) {
      alert(`Sign-up failed: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      alert("You have been logged out.");
    } catch (error: any) {
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded mb-2"
      >
        Log In
      </button>
      <button
        onClick={handleSignup}
        className="w-full bg-green-500 text-white p-2 rounded mb-2"
      >
        Sign Up
      </button>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white p-2 rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default LoginComponent;
