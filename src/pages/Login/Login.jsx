import React from "react";
import "./Login.css";
import logo from "../../img/logo.png";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <img src={logo} alt="" />
          <h3>ALUMNI PORTAL</h3>
          <h4>CSE DEPARTMENT</h4>
          <h4 id="bit">BIT MESRA</h4>
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button onClick="login()">Login</button>
          <div className="extra">
            <a id="reg" href="./register.html">
              Don't have an account?
            </a>

            <a id="fp" href="./forgotpwd.html">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
