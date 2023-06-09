import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <h3>Create your account</h3>
          <input id="name" type="text" placeholder="Name" />
          <input
            id="roll"
            type="text"
            placeholder="Institute Roll Number (BTECH/1XXXX/XX)"
          />
          <input id="email" type="text" placeholder="Email address" />
          <div>
            Date of Birth:
            <input
              id="dob"
              type="date"
              title="Date of Birth"
              placeholder="Date of Birth"
            />
          </div>
          <input id="pwd" type="password" placeholder="New password" />
          <input id="repwd" type="password" placeholder="Re-enter password" />
          <button onClick="login()">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
