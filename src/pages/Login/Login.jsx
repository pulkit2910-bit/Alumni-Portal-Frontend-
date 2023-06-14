import React, { useContext, useRef } from "react";
import "./Login.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls/auth";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password : password.current.value }, dispatch);
    if (error && error.response.data.status === 400) alert(error.response.data.message);
    if (error && error.response.data.status === 404) alert(error.response.data.message);
    alert("Login Success");
  }

  return (
    <div>
      <div className="container">
        <form className="box" onSubmit={handleSubmit}>
          <img src={logo} alt="" />
          <h3>ALUMNI PORTAL</h3>
          <h4>CSE DEPARTMENT</h4>
          <h4 id="bit">BIT MESRA</h4>
          <input type="text" placeholder="Email address" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          <button type="submit" disabled={isFetching} >
            {isFetching ? "Loading..." : "Login"}
          </button>
          <div className="extra">
            <Link to="/register" id="reg">
              Don't have an account? 
            </Link>

            <a id="fp" href="./forgotpwd.html">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
