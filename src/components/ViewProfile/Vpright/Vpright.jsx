import React from 'react'
import '../../Profile/ProfileRight/ProfileRight.css'
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";


const Vpright = () => {
  let email = 'xyz@email.com';
  let altemail = '';
  let phoneno = 919999999999;
  let altphoneno = '';
  let socialhandles = [{ socialmedianame: '', profilelink: ''}]; //it's an object
  let achievements = ['JEE Main Rank 6633','JEE Advanced disqualified']; //it's an array
//html/jsx code
  return (
    <>
    <div id="containsrighteditprofile">
    <div>
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
        </div>
    </div>

    <div>
        <div className="view-mode-right">
          <h4>Achievements <GrAchievement/> :</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul> 
        </div> 
    </div>   
    </div>
    </>
  )
};

export default Vpright;
