import React from 'react'
import './Posts.css'
import Post from "../Post/Post"
import PostShare from "../PostShare/PostShare";
import ProfileCard from '../ProfileCard/ProfileCard';
import { useLocation } from 'react-router-dom';

const Posts = () => {
  const location = useLocation();
  const isProfile = location.pathname === "/profile";

  return (
    <div className='Posts'>
      {!isProfile && <PostShare />}
      {isProfile && <ProfileCard profile={isProfile} />}
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
