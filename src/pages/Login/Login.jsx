import React, { useContext, useRef } from "react";
import "./Login.css";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { loginCall } from "../../apiCalls/auth";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginCall({ email: email.current.value, password : password.current.value }, dispatch);
    if (res && res?.response?.status === 400) {
      alert(res.response.data.message); return;
    }
    if (res && res?.response?.status === 404) {
      alert(res.response.data.message); return;
    }
    
    let role;
    if (res?.role === "outgoing_student" || res?.role === "current_student") {
      role = "student";
    }
    else role = res?.role;
    navigate(`/${role}`);
  }

  return (
    <div>
      <div className="container">
        <form className="box" onSubmit={handleSubmit}>
          <img src={logo} alt="" />
          <h3>ALUMNI-STUDENT PORTAL</h3>
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
