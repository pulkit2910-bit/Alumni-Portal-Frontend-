import React, { useContext } from 'react'
import './Posts.css'
import Post from "../Post/Post"
import PostShare from "../PostShare/PostShare";
import { FeedContext } from '../../../Context/FeedContext/FeedContext';

const Posts = () => {
  const { posts } = useContext(FeedContext);

  return (
    <div className='Posts'>
      <PostShare />
      {posts && 
        posts.map((p, k) => {
          return <Post post={p} key={k} />
        })
      }
    </div>
  )
}

export default Posts
