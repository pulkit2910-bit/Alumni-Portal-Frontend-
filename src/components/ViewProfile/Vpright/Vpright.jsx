import React from 'react'
import '../../Profile/ProfileRight/ProfileRight.css'
import { AiOutlineContacts } from "react-icons/ai";
import { SlSocialInstagram , SlSocialLinkedin , SlSocialTwitter} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";


const Vpright = ({ user }) => {
  let email = user.email;
  let altEmail = user.altEmail;
  let phoneNo = user.phoneNo;
  let altPhoneNo = user.altPhoneNo;
  let socialHandles = user.socialHandles; //it's an object
  let achievements = user.achievements; //it's an array
//html/jsx code
  return (
    <>
    <div id="containsrighteditprofile">
    <div>
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
