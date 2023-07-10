import React from 'react'
import './StudentRight.css'
import { useState } from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";


const StudentRight = () => {
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

let [Achievements, setAchievements] = useState([
  { Title: '', Description: '', SupportingLink: '', SupportingDocument: null },
]);
let [isEditRight2Mode, setIsEditRight2Mode] = useState(false);

  const handleAchievementsChange = (e, index, field) => {
  const updatedAchievements = [...Achievements];
    if (field === "SupportingDocument") {
      const file = e.target.files[0];
      updatedAchievements[index].SupportingDocument = file;
    }
    else updatedAchievements[index][field] = e.target.value;
    setAchievements(updatedAchievements);
  };

  const addAchievements = () => {
    setAchievements([...Achievements, { Title: '', Description: '', SupportingLink: '', SupportingDocument: null }]);
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
          <div>
          <label htmlFor="achievements">Achievements :</label>
              {Achievements.map((achievement, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Title"
                  value={achievement.Title}
                  onChange={(e) => handleAchievementsChange(e, index, 'Title')}
                />
                <textarea
                  placeholder="Description"
                  value={achievement.Description}
                  style={{height:'36px', resize:'vertical'}}
                  onChange={(e) => handleAchievementsChange(e, index, 'Description')}
                />
                <input
                  type="text"
                  placeholder="Supporting Link"
                  value={achievement.SupportingLink}
                  onChange={(e) => handleAchievementsChange(e, index, 'SupportingLink')} 
                  style={{ marginBottom: "5px"}}           
                />
                Supporting Document: <input
                    type="file"
                    placeholder="Supporting Document"
                    onChange={(e) =>
                      handleAchievementsChange(e, index, 'SupportingDocument')
                    }
                />
                <>
                {achievement.SupportingDocument && <span style={{marginLeft:'8px'}}>Selected file:
                  <a href={URL.createObjectURL(achievement.SupportingDocument)} target="_blank">
                      View Document
                  </a>
                  </span>}
                </>
                {index !== 0 && (
                  <button className="studentsocmbutton" onClick={() => deleteAchievements(index)}>Delete</button>
                )}
              </div>
            ))}
            <div>
            <button className="studentsocmbutton" onClick={addAchievements}>Add</button>
          </div>
          </div>
          <button onClick={handleRight2SaveClick}><AiOutlineSave/></button>
        </div>
      ) : (
        <div className="student-view-mode-right">
          <h4>Achievements <GrAchievement/> :</h4>
            {Achievements.map((Achievement, index) => (
            <div key={index}>
                { Achievement.Title?(<>
                <h5>{Achievement.Title}</h5>
                <p>{Achievement.Description}</p>
                <p>{Achievement.SupportingDocument?(
                    <a href={URL.createObjectURL(Achievement.SupportingDocument)} target="_blank">
                        View Document
                    </a>):(<>N/A</>)
                    }
                </p>
                <p>{Achievement.SupportingLink?(
                    <a href={(Achievement.SupportingLink)} target="_blank">
                        Link &#x1F517;
                    </a>):(<>N/A</>)
                    }
                </p>
                {index===(Achievements.length-1)?null:Achievements[index+1].Title===''?null:(<hr/>)}
                </>
                ):
                (Achievement.Title='')}
                </div>
         ))}
         <div>
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
