import React, { useRef } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerCall } from "../../apiCalls/auth";

const Register = () => {
  const name = useRef();
  const rollNumber = useRef();
  const email = useRef();
  const dob = useRef();
  const password = useRef();
  const re_password = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== re_password.current.value) {
      alert("Re-entered password does not match");
      return ;
    }
    
    const userCredentials = {
      "name" : name.current.value,
      "rollNumber" : rollNumber.current.value,
      "email" : email.current.value,
      "dob" : dob.current.value,
      "password" : password.current.value,
    }
    registerCall(userCredentials)

    navigate("/profile");
  }

  return (
    <div>
      <div className="container">
        <form className="box" onSubmit={handleSubmit}>
          <h3>Create your account</h3>
          <input id="name" type="text" placeholder="Name" ref={name} />
          <input
            id="roll"
            type="text"
            placeholder="Institute Roll Number (BTECH/1XXXX/XX)"
            ref={rollNumber}
          />
          <input id="email" type="text" placeholder="Email address" ref={email} />
          <div className="dobinput">
            Date of Birth:
            <input
              id="dob"
              type="date"
              title="Date of Birth"
              placeholder="Date of Birth"
              ref={dob}
            />
          </div>
          <input id="pwd" type="password" placeholder="New password" ref={password} />
          <input id="repwd" type="password" placeholder="Re-enter password" ref={re_password} />
          <button type="submit" >Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
