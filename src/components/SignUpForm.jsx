import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUpForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <form className="Form">
      <h1>Sign Up</h1>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          className="text-input"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          className="text-input"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="text-input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
        />
      </div>
      <button type="button">Sign Up</button>
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
