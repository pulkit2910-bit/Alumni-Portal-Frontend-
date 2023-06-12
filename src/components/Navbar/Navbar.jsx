import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

// icons
import Logo from "../../../src/img/logo.png";
import ProfilePic from "../../../src/img/img1.png";
import { GoHome, GoCalendar, GoLocation } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { CiUser, CiEdit, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DropdownItem = ({ item }) => {
  // const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // const logout = async () => {
  //   dispatch({ type: "INTITIAL_STATE" });
  //   const res = await axios.post("/auth/logout");
  //   console.log(res);
  // };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.id === 0) {
      navigate("/profile");
    }
    // } else if (item.id === 1) {
    //   navigate("/edit-profile");
    // } else if (item.id === 2) {
    //   logout();
    // }
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
  const [open, setOpen] = useState(false);
  const settings = useRef();
  const options = [
    { label: "My Profile", icon: <CiUser />, id: 0 },
    { label: "Logout", icon: <CiLogout />, id: 1 },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (!settings.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navIcons">
          <div title="Home">
            <GoHome />
          </div>
          <div title="Events">
            <GoCalendar />
          </div>
          <div title="People"> 
          {/* <Link to="/search" > */}
            <SlPeople />
          {/* </Link> */}
          </div>
          <div title="Map">
            <GoLocation />
          </div>
          <div
            className="profile-navbar"
            title="Profile"
            onClick={() => setOpen(!open)}
            ref={settings}
          >
            <img src={ProfilePic} alt="" />
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
