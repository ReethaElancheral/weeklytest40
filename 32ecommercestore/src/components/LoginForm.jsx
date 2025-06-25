import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, login } = useStore();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  if (user) {
    navigate("/");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      navigate("/");
    }
  };

  return (
    <main className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </label>
        <button type="submit" className="btn-login-submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
