import { Link } from "react-router-dom";
import React from "react";

export default function LoginForm() {
  return (
    <form className="Form">
      <h1>Log In</h1>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input className="text-input" type="email" name="email" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          className="text-input"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button type="button">Log In</button>
      <Link
        to={"/signup"}
        style={{
          textDecoration: "none",
          color: "grey",
        }}
      >
        Don't have an account? Sign Up
      </Link>
      <Link
        to={"/forgot-password"}
        style={{
          marginTop: "1rem",
          fontSize: "0.8rem",
          textDecoration: "none",
          color: "rgb(52, 130, 255)",
        }}
      >
        Forgot Password
      </Link>
    </form>
  );
}
