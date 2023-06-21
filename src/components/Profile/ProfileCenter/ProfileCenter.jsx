import React, { useContext, useRef } from "react";
import './ProfileCenter.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import Cover from "../../../../src/img/cover.jpg";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { editBasicDetailsCall } from "../../../apiCalls/profile";

const ProfileCenter = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [name, setName] = useState(user.name);
  const [title, setTitle] = useState(user.title);
  const [location, setLocation] = useState(user.location);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [isEditMode, setIsEditMode] = useState(false);

  const profilePicRef = useRef();
  const [editProfilePicDisplay, setEditProfilePicDisplay] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPath, setProfilePicPath] = useState(user.avatar.url);

  const handleMouseOver = () => {
    if (isEditMode) setEditProfilePicDisplay(true);
  }
  
  const handleMouseOut = () => {
    if (isEditMode) setEditProfilePicDisplay(false);
  }

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setProfilePic(img);
      const imgUrl = URL.createObjectURL(img);
      setProfilePicPath(imgUrl);
    }
  }

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profile-pic", profilePic);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("skills", skills);

    editBasicDetailsCall(user, formData, dispatch);
    setIsEditMode(false);
    setEditProfilePicDisplay(false);
  };

  return (
    <div className="profile-page">
      <div className="ProfilepageCard">
      <div className="ProfilepageImages">
        <img className="profilepage-cover" src={Cover} alt="" />
        <div className="profilePic" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => profilePicRef.current.click()} >
          <img src={profilePicPath} alt="" />
          <div style={{display : `${editProfilePicDisplay ? "block" : "none"}`}} className="edit-profile-pic" >
            <h5>Change Profile photo</h5>
          </div>
        </div>

        <div style={{display : "none"}}>
          <input type="file" name="profile-pic" accept=".png,.jpg,.jpeg" ref={profilePicRef} onChange={handleProfilePicChange} />
        </div>
      </div>
      <div className="ProfilepageName">
        <span>{name}</span>
      </div>
      <div className='profilepageCard-options'>
        <div>
            {user.rollNumber}
        </div>
        <div>
            {title}
        </div>
        <div>
            {location}
        </div>
      </div>
      </div>

      {isEditMode ? (
        <div className="edit-mode">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              id="skills"
              value={skills.join(',')}
              onChange={(e) => setSkills(e.target.value.split(','))}
            />
          </div>
          <button onClick={handleSaveClick}><AiOutlineSave/> Save</button>
        </div>
      ) : (
        <div className="view-mode">
          <h4>About</h4>
          <p>{about}</p>

          <h4>Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <button onClick={() => setIsEditMode(true)}><AiOutlineEdit/> Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCenter;