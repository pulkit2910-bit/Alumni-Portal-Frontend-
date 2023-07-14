import React from 'react'
import './StudentRight.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import { updateAchievements } from '../../../apiCalls/current_student';


const StudentRight = ({ user }) => {
  let [email, setEmail] = useState('xyz@email.com');
  let [altEmail, setAltEmail] = useState('');
  let [phoneNo, setPhoneNo] = useState(919999999999);
  let [altPhoneNo, setAltPhoneNo] = useState('');
  let [socialHandles, setSocialHandles] = useState([{ socialmedianame: '', profilelink: ''},]); //it's an object
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
    setIsEditRightMode(false);
  };


//for achievements edit button

let [Achievements, setAchievements] = useState(user.student_achievements);
let [isEditRight2Mode, setIsEditRight2Mode] = useState(false);

  const handleAchievementsChange = (e, index, field) => {
  const updatedAchievements = [...Achievements];
  updatedAchievements[index][field] = e.target.value;
  setAchievements(updatedAchievements);
  };

  const addAchievements = () => {
    setAchievements([...Achievements, { title: '', desc: '', link: ''}]);
  };

  const deleteAchievements = (index) => {
    const updatedAchievements = [...Achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  const handleRight2EditClick = () => {
    setIsEditRight2Mode(true);
  };

  const handleRight2SaveClick = () => {
    updateAchievements(Achievements)
    setIsEditRight2Mode(false);
  };

//html/jsx code
  return (
    <>
    <div id="studentcontainerighteditprofile">
    <div>
      {isEditRightMode ? (
        <div className="student-edit-mode-right">
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
          <div className='studentsocminputbox'>
          <label htmlFor="education" id="studentsocmheading">Social Handles :</label>
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
              {index !== 0 && (<button className="studentsocmbutton" onClick={() => deleteSocialHandles(index)}>Delete</button>)}
          </div>))}
          <div>
          <button className="studentsocmbutton" onClick={addSocialHandles}>Add</button>
        </div>
          </div>
          <button onClick={handleRightSaveClick}><AiOutlineSave/></button>
        </div>
      ) : (
        <div className="student-view-mode-right">
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
        <div className="student-edit-mode-right">
          <div  id='achievementsdiv'>
          <label htmlFor="achievements">Achievements :</label>
              {Achievements.map((achievement, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Title"
                  value={achievement.title}
                  onChange={(e) => handleAchievementsChange(e, index, 'title')}
                />
                <textarea
                  placeholder="desc"
                  value={achievement.desc}
                  style={{height:'36px', resize:'vertical'}}
                  onChange={(e) => handleAchievementsChange(e, index, 'desc')}
                />
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document"
                  value={achievement.link}
                  onChange={(e) => handleAchievementsChange(e, index, 'link')} 
                  style={{ marginBottom: "5px"}}           
                />
                {index !== 0 && (
                  <button className="studentsocmbutton" style={{marginTop:"5px"}} onClick={() => deleteAchievements(index)}>Delete</button>
                )}
              </div>
            ))}
            <div id="achievementsbuttonbox">
            <button className="studentsocmbutton" onClick={addAchievements}>Add</button>
            <button onClick={handleRight2SaveClick}><AiOutlineSave/></button>
            </div>
          </div>

        </div>
      ) : (
        <div className="student-view-mode-right">
          <h4>Achievements <GrAchievement/> :</h4>
            {Achievements.map((Achievement, index) => (
            <div key={index}>
                { Achievement.title?(<>
                <h5>{Achievement.title}</h5>
                <p>{Achievement.desc}</p>
                <p>{Achievement.link?(
                    <a href={`https://${Achievement.link}`} target="_blank">
                        View Document &#x1F517;
                    </a>):(<em>Validating Document N/A</em>)
                    }
                </p>
                {index===(Achievements.length-1)?null:Achievements[index+1].title===''?null:(<hr/>)}
                </>
                ):
                (Achievement.title='')}
                </div>
         ))}
         <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button onClick={handleRight2EditClick}><AiOutlineEdit/></button>
          </div>
        </div>
      )}     
    </div>   
    </div>
    </>
  )
};

export default StudentRight;
