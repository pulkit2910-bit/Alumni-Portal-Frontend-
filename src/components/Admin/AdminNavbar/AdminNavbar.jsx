import React from 'react';
import "./AdminNavbar.css";
import { Link } from "react-router-dom"; 
import Logo from "../../../img/logo.png";

function AdminNavbar() {
  return (
    <div className="AdminNavbar">
    <div className="AdminNavbar-container">
      <div className="AdminLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="AdminNavIcons">
        <div title="Alumni Home">
        <Link to="/admin/" >
          Alumni Home
          </Link>
        </div>
        <div title="Add Events">
        <Link to="/admin/add-events" >
          Add Events
          </Link>
        </div>
        <div title="Alumni Search"> 
        <Link to="/admin/alumni-search" >
          Alumni Search
        </Link>
        </div>
        <div title="Student Search">
        <Link to="/admin/student-search" >
          Student Search
        </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar