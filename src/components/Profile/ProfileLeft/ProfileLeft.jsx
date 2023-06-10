import React from 'react'
import './ProfileLeft.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";


const ProfileLeft = () => {


//for Education edit button

  let [education, setEducation] = useState([
    { institution: '', degree: '', startDate: '', endDate: '' },
  ]);
  let [isEditLeftMode, setIsEditLeftMode] = useState(false);

  const handleEducationChange = (e, index, field) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = e.target.value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', startDate: '', endDate: '' }]);
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleLeftEditClick = () => {
    setIsEditLeftMode(true);
  };

  const handleLeftSaveClick = () => {
    setIsEditLeftMode(false);
  };


//for Experiences edit button

const [experience, setExperience] = useState([  { company: '', position: '', startDate: '', endDate: '' },]); //it's an array of objects
let [isEditLeft2Mode, setIsEditLeft2Mode] = useState(false);

  const handleLeft2EditClick = () => {
    setIsEditLeft2Mode(true);
  };

  const handleLeft2SaveClick = () => {
    setIsEditLeft2Mode(false);
  };

  const handleExperienceChange = (e, index, field) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = e.target.value;
    setExperience(updatedExperience);
  };
  
  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', startDate: '', endDate: '' }]);
  };
  
  const deleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };
  

//html/jsx code
  return (
    <div id="containslefteditprofile">
    <div>
      {isEditLeftMode ? (
        <div className="edit-mode-left">
          <label htmlFor="education">Education :</label>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(e, index, 'institution')}
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(e, index, 'degree')}
              />
              <input
                type="text"
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(e, index, 'startDate')}
              />
              <input
                type="text"
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(e, index, 'endDate')}
              />
              {index !== 0 && (
                <button class="edubutton" onClick={() => deleteEducation(index)}>Delete</button>
              )}
            </div>
          ))}
          <div class="butatend">
      <button class="edubutton" onClick={addEducation}>Add</button>
      <button class="edubutton" onClick={handleLeftSaveClick}><AiOutlineSave/></button>
      </div>
    </div>
    ) : (
      <div className="view-mode-left">
        <h4>Education :</h4>
        {education.map((edu, index) => (
        <div key={index}>
          <h5>{edu.institution}</h5>
          <p>{edu.degree}</p>
          <p>{edu.startDate} - {edu.endDate}</p>
          {index===(education.length-1)?(index===(education.length-1)):(<hr/>)}
        </div>
        ))}<div class="butatend2">
            <button class="edubutton" onClick={handleLeftEditClick}><AiOutlineEdit/></button>
          </div>
        </div>
      )}
  </div>


      <div>
          {isEditLeft2Mode ? (
            <div className="edit-mode-left">
              <label htmlFor="education">Experience :</label>
              {experience.map((exp, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(e, index, 'company')}
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(e, index, 'position')}
                  />
                  <input
                    type="text"
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(e, index, 'startDate')}
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(e, index, 'endDate')}
                  />
                  {index !== 0 && (
                    <button class="edubutton" onClick={() => deleteExperience(index)}>Delete</button>
                  )}
                </div>
              ))}
              <div class="butatend">
          <button class="edubutton" onClick={addExperience}>Add</button>
          <button class="edubutton" onClick={handleLeft2SaveClick}><AiOutlineSave/></button>
          </div>
        </div>
        ) : (
          <div className="view-mode-left">
            <h4>Experience:</h4>
              {experience.map((exp, index) => (
                <div key={index}>
                  <h5>{exp.company}</h5>
                  <p>{exp.position}</p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  {index===(experience.length-1)?(index===(experience.length-1)):(<hr/>)}
                </div>
            ))}<div class="butatend2">
                <button class="edubutton" onClick={handleLeft2EditClick}><AiOutlineEdit/></button>
              </div>
            </div>
          )}
      </div>

    </div>
  )
};

export default ProfileLeft
