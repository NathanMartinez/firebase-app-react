import { Link } from "react-router-dom";
import React from "react";

export default function ForgotPassword() {
  return (
    <form className="Form">
      <h1>Forgot Password</h1>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input className="text-input" type="email" name="email" id="email" />
      </div>
      <button type="button">Send Reset Password Link</button>
      <Link
        to={"/login"}
        style={{
          textDecoration: "none",
          color: "grey",
        }}
      >
        Already have an account? Log in
      </Link>
    </form>
  );
}
