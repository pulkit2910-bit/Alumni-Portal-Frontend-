import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import TimeAgo from 'react-timeago';

// icons
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import axios from "axios";

const Post = ({post, profile}) => {
  const { user: currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userID=${post.userID}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchUser();
    // console.log(user);
  }, [currentUser._id, post]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (

    <div className="Post">
      {user && (
        <>
          <div className="postHeader">
            <img src={user.avatar.url} alt="" />
            <span>
              <b>{user.name}</b>
            </span>
          </div>
    
          <hr />
    
          <img src={post.img.url} alt="" />
    
          <hr />
    
          <div className="details">
            <span>{user.name}</span>
            <span>{post.desc}</span>
          </div>
          <div className="postBottom">
            <TimeAgo date={post.createdAt} />
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
