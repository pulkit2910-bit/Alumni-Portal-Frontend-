import React, { useState, useRef, useContext } from "react";
import "./Navbar.css";
import axios from "axios";
// icons
import Logo from "../../../src/img/logo.png";
import { GoHome } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { CiUser, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  
import { AuthContext } from "../../Context/AuthContext/AuthContext";

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
    if (item.id === 0) {
      navigate("/alumni/profile");
    }
    else if (item.id === 1) {
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

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const settings = useRef();
  let options = [
    { label: "My Profile", icon: <CiUser />, id: 0 },
    { label: "Logout", icon: <CiLogout />, id: 1 },
  ];

  if (user?.role !==  "alumni") {
    options = [
      { label: "Logout", icon: <CiLogout />, id: 1 },
    ];
  }

  // drop down feature not working
  // useEffect(() => {
  //   const handler = (e) => {
  //     if (!settings.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };
    // document.addEventListener("mousedown", handler);
  // }, [open]);

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navIcons">
          {user?.role === "alumni" && (<>
          <div title="Home">
            <Link to="/alumni" >
              <GoHome />
            </Link>
          </div>
          <div title="People"> 
            <Link to="/alumni/search" >
              <SlPeople />
            </Link>
          </div></>)}
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
  );
};

export default Navbar;
