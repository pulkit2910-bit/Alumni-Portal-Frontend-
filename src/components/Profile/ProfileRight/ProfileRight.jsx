import React from 'react'
import './ProfileRight.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";


const ProfileRight = () => {
  let [email, setEmail] = useState('xyz@email.com');
  let [altemail, setAltEmail] = useState('');
  let [phoneno, setPhoneNo] = useState(919999999999);
  let [altphoneno, setAltPhoneNo] = useState('');
  let [socialhandles, setSocialHandles] = useState([{ socialmedianame: '', profilelink: ''},]); //it's an object
  let [isEditRightMode, setIsEditRightMode] = useState(false);

  const handleSocialMediaChange = (e, index, field) => {
    const updatedSocialMedia = [...socialhandles];
    updatedSocialMedia[index][field] = e.target.value;
    setSocialHandles(updatedSocialMedia);
  };

  const addSocialHandles = () => {
    setSocialHandles([...socialhandles, { socialmedianame: '', profilelink: ''}]);
  };

  const deleteSocialHandles = (index) => {
    const updatedSocialMedia = [...socialhandles];
    updatedSocialMedia.splice(index, 1);
    setSocialHandles(updatedSocialMedia);
  };


//for contacts edit button

  const handleRightEditClick = () => {
    setIsEditRightMode(true);
  };

  const handleRightSaveClick = () => {
    setIsEditRightMode(false);
  };


//for achievements edit button

let [achievements, setAchievements] = useState(['JEE Main Rank 6633','JEE Advanced disqualified']); //it's an array
let [isEditRight2Mode, setIsEditRight2Mode] = useState(false);

  const handleRight2EditClick = () => {
    setIsEditRight2Mode(true);
  };

  const handleRight2SaveClick = () => {
    setIsEditRight2Mode(false);
  };

//html/jsx code
  return (
    <>
    <div id="containsrighteditprofile">
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
            <label htmlFor="altemail">Aleternate Email:</label>
            <input
              type="text"
              id="altemail"
              placeholder='alternate email id'
              value={altemail}
              onChange={(e) => setAltEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneno">Phone Number:</label>
            <input
              type="number"
              id="phoneno"
              placeholder='along with std code ex:919999999999'
              onWheelCapture={(e) => e.target.blur()}              
              value={phoneno}
              onChange={(e) => setPhoneNo(e.target.valueAsNumber)}
            />
          </div>
          <div>
            <label htmlFor="altphoneno">Aleternate Phone Number:</label>
            <input
              type="number"
              id="altphoneno"
              placeholder='along with std code ex:919999999999'
              onWheelCapture={(e) => e.target.blur()}
              value={altphoneno}
              onChange={(e) => setAltPhoneNo(e.target.valueAsNumber)}
            ></input>
          </div>
          <div className='socminputbox'>
          <label htmlFor="education" id="socmheading">Social Handles :</label>
          {socialhandles.map((socm, index) => (
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
          { altemail? (<p>Alternate Email: {altemail}</p>):(altemail='')}
          { phoneno? (<p>Phone Number: +{phoneno}</p>):(phoneno='')}
          { altphoneno? (<p>Alternate Phone Number: +{altphoneno}</p>):(altphoneno='')}
          <hr />
          <h4>Social Handles <SlSocialInstagram/> <SlSocialLinkedin/> <SlSocialTwitter/> :</h4>
          <ul>
          {socialhandles.map((socm, index) => (
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
