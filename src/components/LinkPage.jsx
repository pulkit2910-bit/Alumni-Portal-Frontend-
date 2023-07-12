import React from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/alumni">Alumni Page</Link>
      <Link to="/admin">Admin Page</Link>
      <Link to="/student">Student Page</Link>
    </div>
  );
};

export default LinkPage;
