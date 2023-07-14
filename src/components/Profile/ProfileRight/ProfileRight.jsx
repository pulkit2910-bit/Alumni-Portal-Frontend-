import React, { useContext } from 'react'
import './ProfileRight.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import { editAchievements, editContactDetailsCall } from '../../../apiCalls/profile';

const ProfileRight = () => {
  const { user, dispatch } = useContext(AuthContext);

  let [email, setEmail] = useState(user.email);
  let [altEmail, setAltEmail] = useState(user.altEmail);
  let [phoneNo, setPhoneNo] = useState(user.phoneNo);
  let [altPhoneNo, setAltPhoneNo] = useState(user.altPhoneNo);
  let [socialHandles, setSocialHandles] = useState(user.socialHandles.length!==0 ? user.socialHandles : [{ socialmedianame: '', profilelink: ''},]); //it's an object
  let [isEditRightMode, setIsEditRightMode] = useState(false);

  const handleSocialMediaChange = (e, index, field) => {
    const updatedSocialMedia = [...socialHandles];
    updatedSocialMedia[index][field] = e.target.value;
    setSocialHandles(updatedSocialMedia);
  };

  const addSocialHandles = () => {
    setSocialHandles([...socialHandles, { socialmedianame: '', profilelink: ''}]);
  };

  const deleteSocialHandles = (index) => {
    const updatedSocialMedia = [...socialHandles];
    updatedSocialMedia.splice(index, 1);
    updatedSocialMedia.splice(index, 1);
    setSocialHandles(updatedSocialMedia);
  };


//for contacts edit button

  const handleRightEditClick = () => {
    setIsEditRightMode(true);
  };

  const handleRightSaveClick = () => {
    const details = {
      "email" : email,
      "altEmail" : altEmail,
      "phoneNo" : phoneNo,
      "altPhoneNo" : altPhoneNo,
      "socialHandles" : socialHandles
    }
    // console.log(details);
    editContactDetailsCall(user, details, dispatch);
    setIsEditRightMode(false);
  };


//for achievements edit button

  let [achievements, setAchievements] = useState(user.achievements); //it's an array
  let [isEditRight2Mode, setIsEditRight2Mode] = useState(false);

  const handleRight2EditClick = () => {
    setIsEditRight2Mode(true);
  };

  const handleRight2SaveClick = () => {
    // console.log(achievements)
    editAchievements(user, achievements, dispatch);
    setIsEditRight2Mode(false);
  };

//html/jsx code
  return (
    <>
    <div id="containerrighteditprofile">
    <div>
      {isEditRightMode ? (
        <div className="edit-mode-right">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder='email id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="altEmail">Aleternate Email:</label>
            <input
              type="text"
              id="altEmail"
              placeholder='alternate email id'
              value={altEmail}
              onChange={(e) => setAltEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="number"
              id="phoneNo"
              placeholder='along with std code ex:919999999999'
              onWheelCapture={(e) => e.target.blur()}              
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <label htmlFor="altPhoneNo">Aleternate Phone Number:</label>
            <input
              type="number"
              id="altPhoneNo"
              placeholder='along with std code ex:919999999999'
              onWheelCapture={(e) => e.target.blur()}
              value={altPhoneNo}
              onChange={(e) => setAltPhoneNo(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className='socminputbox'>
          <label htmlFor="education" id="socmheading">Social Handles :</label>
          {socialHandles.map((socm, index) => (
            <div key={index} >
              <input
                type="text"
                placeholder="Social Media Name"
                value={socm.socialmedianame}
                onChange={(e) => handleSocialMediaChange(e, index, 'socialmedianame')}
              />
              <input
                type="text"
                placeholder="Profile Link"
                value={socm.profilelink}
                onChange={(e) => handleSocialMediaChange(e, index, 'profilelink')}
              />
              {index !== 0 && (<button className="socmbutton" onClick={() => deleteSocialHandles(index)}>Delete</button>)}
          </div>))}
          <div>
          <button className="socmbutton" onClick={addSocialHandles}>Add</button>
        </div>
          </div>
          <button onClick={handleRightSaveClick}><AiOutlineSave/></button>
        </div>
      ) : (
        <div className="view-mode-right">
          <h4>Contacts <AiOutlineContacts/> :</h4>
          { email? (<p>Email: {email}</p>):(email='')}
          { altEmail? (<p>Alternate Email: {altEmail}</p>):(altEmail='')}
          { phoneNo? (<p>Phone Number: +{phoneNo}</p>):(phoneNo='')}
          { altPhoneNo? (<p>Alternate Phone Number: +{altPhoneNo}</p>):(altPhoneNo='')}
          <hr />
          <h4>Social Handles <SlSocialInstagram/> <SlSocialLinkedin/> <SlSocialTwitter/> :</h4>
          <ul>
          {socialHandles.map((socm, index) => (
              <li key={index}>{<a href={socm.profilelink}>{socm.socialmedianame}</a>}</li>
            ))}
          </ul>
 
          <button onClick={handleRightEditClick}><AiOutlineEdit/></button>
        </div>
      )}
    </div>


    <div>
    {isEditRight2Mode ? (
        <div className="edit-mode-right">
          <div>
          <label htmlFor="achievements">Achievements :</label>
            <textarea
              type="text"
              id="achievements"
              placeholder='add achievements and seprate them by comma (,)'
              value={achievements.join(',')}
              onChange={(e) => setAchievements(e.target.value.split(','))}
            />
          </div>
          <button onClick={handleRight2SaveClick}><AiOutlineSave/></button>
        </div>
      ) : (
        <div className="view-mode-right">
          <h4>Achievements <GrAchievement/> :</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul> 
          <button onClick={handleRight2EditClick}><AiOutlineEdit/></button>
        </div>
      )}     
    </div>   
    </div>
    </>
  )
};

export default ProfileRight;
