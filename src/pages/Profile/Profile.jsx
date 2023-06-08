import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import ProfileLeft from '../../components/Profile/ProfileLeft/ProfileLeft'
import ProfileRight from '../../components/Profile/ProfileRight/ProfileRight'

const Profile = () => {
  return (
    <div className='Profile'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='profile-middle'>
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  )
}

export default Profile
