import React from 'react'
import "./ProfileCard.css";
import Cover from "../../../../src/img/cover.jpg";
import ProfilePic from "../../../../src/img/img1.png";

const ProfileCard = ({ profile }) => {
    
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img className={profile ? "profile-cover" : "home-cover"} src={Cover} alt="" />
        <img src={ProfilePic} alt="" />
      </div>

      <div className="ProfileName">
        <span>Nishul</span>
      </div>

      <hr />

      <div className='profileCard-options'>
        <div>
            Events
        </div>
        <div>
            People
        </div>
      </div>

    </div>
  )
}

export default ProfileCard
