import React, { useContext } from 'react'
import './ProfileLeft.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthContext/AuthContext"
import { editEducationCall, editExperienceCall } from '../../../apiCalls/profile';

const ProfileLeft = () => {
  const { user, dispatch } = useContext(AuthContext);

//for Education edit button
  let [education, setEducation] = useState(user.education);
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
    // console.log(education)
    editEducationCall(user, education, dispatch);
    setIsEditLeftMode(false);
  };


//for Experiences edit button

const [experience, setExperience] = useState(user.experience); //it's an array of objects
let [isEditLeft2Mode, setIsEditLeft2Mode] = useState(false);

  const handleLeft2EditClick = () => {
    setIsEditLeft2Mode(true);
  };

  const handleLeft2SaveClick = () => {
    // console.log(experience)
    editExperienceCall(user, experience, dispatch)
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
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
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
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => handleEducationChange(e, index, 'startDate')}
              />
              <input
                type="text"
                placeholder="End Date"
                value={edu.endDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => handleEducationChange(e, index, 'endDate')}
              />
              {index !== 0 && (
                <button className="edubutton" onClick={() => deleteEducation(index)}>Delete</button>
              )}
            </div>
          ))}
          <div className="butatend">
      <button className="edubutton" onClick={addEducation}>Add</button>
      <button className="edubutton" onClick={handleLeftSaveClick}><AiOutlineSave/></button>
      </div>
    </div>
    ) : (
      <div className="view-mode-left">
        <h4>Education :</h4>
        {education.map((edu, index) => (
        <div key={index}>
            { edu.institution?(<>
            <h5>{edu.institution}</h5>
            <p>{edu.degree}</p>
            <p>{formatDate(edu.startDate)} {edu.endDate?(<> - {formatDate(edu.endDate)}</>):(<> - present</>)}</p>
            {index===(education.length-1)?null:education[index+1].institution===''?null:(<hr/>)}
            </>
            ):
            (edu.institution='')}
        </div>
        ))}<div className="butatend2">
            <button className="edubutton" onClick={handleLeftEditClick}><AiOutlineEdit/></button>
          </div>
        </div>
      )}
  </div>


      <div>
          {isEditLeft2Mode ? (
            <div className="edit-mode-left">
              <label htmlFor="experience">Experience :</label>
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
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => handleExperienceChange(e, index, 'startDate')}
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    value={exp.endDate}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => handleExperienceChange(e, index, 'endDate')}
                  />
                  {index !== 0 && (
                    <button className="edubutton" onClick={() => deleteExperience(index)}>Delete</button>
                  )}
                </div>
              ))}
              <div className="butatend">
          <button className="edubutton" onClick={addExperience}>Add</button>
          <button className="edubutton" onClick={handleLeft2SaveClick}><AiOutlineSave/></button>
          </div>
        </div>
        ) : (
          <div className="view-mode-left">
            <h4>Experience:</h4>
              {experience.map((exp, index) => (
                <div key={index}>
                  { exp.company?(<>
                  <h5>{exp.company}</h5>
                  <p>{exp.position}</p>
                  <p>{formatDate(exp.startDate)} {exp.endDate?(<> - {formatDate(exp.endDate)}</>):(<> - present</>)}</p>
                  {index===(experience.length-1)?null:experience[index+1].company===''?null:(<hr/>)}
                  </>
                  ):
                  (exp.company='')}
                </div>
            ))}
            <div className="butatend2">
                <button className="edubutton" onClick={handleLeft2EditClick}><AiOutlineEdit/></button>
              </div>
            </div>
          )}
      </div>

    </div>
  )
};

export default ProfileLeft
