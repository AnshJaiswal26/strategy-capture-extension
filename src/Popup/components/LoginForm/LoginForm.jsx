import React, { useState } from "react";
import "./LoginForm.css";
import { Button, Loading } from "@components";

export default function LoginForm({ updateStore }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      updateStore((s) => {
        s.userLoggedIn = true;
      });
    }, 2000);
  };

  return (
    <div className="popup-card">
      {/* Header */}
      <div className="popup-header">
        <h2>Find My Edge Login</h2>
      </div>

      {/* Body */}
      <form className="popup-body" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Actions */}
        <div className="popup-actions">
          <Button text={"Clear"} type="hollow" onClick={handleClear} />
          <Button
            text={isLoading ? <Loading size={18.5} button={true} /> : "Login"}
            type="fill"
            disable={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
