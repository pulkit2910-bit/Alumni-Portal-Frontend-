import React, { useRef } from 'react'
import './StudentCenter.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import Cover from "../../../../src/img/cover.jpg";
import Grades from '../Grades/Grades';
import Placement from '../Placement/Placement';
import { updateBasicDetails } from "../../../apiCalls/current_student"

const StudentCenter = ({ user }) => {
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

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profile-pic", profilePic);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("skills", skills);

    updateBasicDetails(formData)

    setIsEditMode(false);
    setEditProfilePicDisplay(false);
  };

  return (
    <div className="student-profile-page">
      <div className="StudentProfilepageCard">
      <div className="StudentProfilepageImages">
        <img className="student-profilepage-cover" src={Cover} alt="" />
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
      <div className="StudentProfilepageName">
        <span>{name}</span>
        <span>{user?.rollNumber}</span>
      </div>
      <div className='student-profilepageCard-options'>
        <div>
            {title}
        </div>
        <div>
            {location}
        </div>
      </div>
      </div>

      {isEditMode ? (
        <div className="student-edit-mode">
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
              placeholder='Web-developer, Competitive Programmer, etc'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              placeholder='Short Address'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              value={about}
              placeholder='Describe Yourself'
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              id="skills"
              placeholder='Write all your skills seprated by ","'
              value={skills.join(',')}
              onChange={(e) => setSkills(e.target.value.split(','))}
            />
          </div>
          <button onClick={handleSaveClick}><AiOutlineSave/> Save</button>
        </div>
      ) : (
        <div className="student-view-mode">
          <h4>About</h4>
          <p>{about}</p>

          <h4>Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <button onClick={handleEditClick}><AiOutlineEdit/> Edit</button>
        </div>
      )}
      {user?.role === "outgoing_student" && <Placement user={user} />}
      <Grades />
    </div>

  );
};

export default StudentCenter;