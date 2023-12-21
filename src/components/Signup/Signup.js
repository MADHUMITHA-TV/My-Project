import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="wrap">
      <div className="wrapper">
        <form action="">
          <h1>Sign-Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">
            <Link to="/ResponsiveAppBar">Sign-Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
