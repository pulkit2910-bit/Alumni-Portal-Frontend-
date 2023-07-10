import React, { useContext } from 'react'
import "./ProfileCard.css";
import Cover from "../../../../src/img/cover.jpg";
import ProfilePic from "../../../../src/img/img1.png";
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

const ProfileCard = () => {
  const { user } = useContext(AuthContext);
    
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img className="profile-cover" src={Cover} alt="" />
        <img src={user.avatar.url} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.name}</span>
      </div>

      <hr />

      <div className='profileCard-options'>
        <div>{user.rollNumber}</div>
        <div>{user.title}</div>
        <div>{user.location}</div>
      </div>

    </div>
  )
}

export default ProfileCard
