import React from "react";
import './ProfileCenter.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import Cover from "../../../../src/img/cover.jpg";
import ProfilePic from "../../../../src/img/img1.png";

const ProfileCenter = () => {
  const [name, setName] = useState('John Doe');
  const [title, setTitle] = useState('Software Engineer');
  const [location, setLocation] = useState('San Francisco, CA');
  const [about, setAbout] = useState('Experienced software engineer with a passion for web development.');
  const [skills, setSkills] = useState(['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS']);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="profile-page">
      <div className="ProfilepageCard">
      <div className="ProfilepageImages">
        <img className="profilepage-cover" src={Cover} alt="" />
        <img src={ProfilePic} alt="" />
      </div>
      <div className="ProfilepageName">
        <span>{name}</span>
      </div>
      <div className='profilepageCard-options'>
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

          <button onClick={handleEditClick}><AiOutlineEdit/> Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCenter;