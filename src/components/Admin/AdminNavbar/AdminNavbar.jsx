import React, { useContext, useRef, useState } from 'react';
import "./AdminNavbar.css";
import { Link, useNavigate } from "react-router-dom"; 
import Logo from "../../../img/logo.png";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import axios from 'axios';

const DropdownItem = ({ item }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    dispatch({ type: "INTITIAL_STATE" });
    await axios.post("/auth/logout");
    alert("User Logged Out");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.id === 1) {
      logout();
      navigate("/");      
    }
  };

  return (
    <li className="dropdownItem" onClick={(e) => handleClick(e)}>
      <p>
        {item.icon}
        {item.label}
      </p>
    </li>
  );
};

function AdminNavbar() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const settings = useRef();
  let options = [
    { label: "Logout", icon: <CiLogout />, id: 1 },
  ];

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
        <div
            className="profile-navbar"
            title="Profile"
            onClick={() => setOpen(!open)}
            ref={settings}
          >
            <img src={user.avatar.url} alt="" />
            <div className={`Dropdown ${open ? "active" : "inactive"}`}>
              <ul>
                {options.map((item, key) => {
                  return <DropdownItem item={item} key={key} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar