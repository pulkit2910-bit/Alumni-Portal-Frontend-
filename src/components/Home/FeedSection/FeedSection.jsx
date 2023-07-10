import React, { useContext, useEffect } from 'react'
import './FeedSection.css'
import Posts from '../Posts/Posts'
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import { FeedContext } from '../../../Context/FeedContext/FeedContext';
import { userFeed } from "../../../apiCalls/posts"

const FeedSection = () => {
  const { user  } = useContext(AuthContext);
  const { dispatch } = useContext(FeedContext);

  useEffect(() => {
    const fetchPosts = async () => {
      userFeed(user._id, dispatch); 
    };
    fetchPosts();
  }, [user, dispatch]);

  return (
    <div>
      <Posts />
    </div>
  )
}

export default FeedSection
