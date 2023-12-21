import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";
//import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="wrap">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            {/* <FaUser className="icon" /> */}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            {/* <FaLock className="icon" /> */}
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            <Link to="/ResponsiveAppBar">Login</Link>
          </button>
          <div className="register-link">
            <p>
              Or <br />
              <Link to="/SignUp">Sign-Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
