import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import TimeAgo from 'react-timeago';
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { FeedContext } from "../../../Context/FeedContext/FeedContext";
import { MdDelete } from "react-icons/md";
import { GoKebabVertical } from "react-icons/go";
import Like from "../../../img/like.png";
import NotLike from "../../../img/notlike.png";
import Comment from "../../../img/comment.png";
import Share from "../../../img/share.png";
import { deletePost } from "../../../apiCalls/posts";
import { Link } from "react-router-dom";

const DropdownItem = ({ item, postID }) => {
  const {posts, dispatch} = useContext(FeedContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (item.id === 0) {
      // delete post
      deletePost(posts, postID, dispatch);
    }
  };

  return (
    <li className="dropdownItem" onClick={(e) => handleClick(e)}>
      <p>
        {item.icon}
        {item.label}
      </p>
    </li>
  );
};

const Post = ({ post }) => {
  const { user: currentUser } = useContext(AuthContext);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const options = [
    { label: "Delete Post", icon: <MdDelete />, id: 0 },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userID=${post.userID}`);
      setUser(res.data);
      setIsLiked(post.likes.includes(currentUser._id));
      setLoading(false);
    };
    fetchUser();
    // console.log(user);
  }, [currentUser._id, post]);

  if (loading) {
    return <div>Loading...</div>
  }

  const likeHandler = async () => {
    try {
      await axios.put(`/posts/like/${post._id}`);
    } catch (err) {}
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (

    <div className="Post">
      {user && (
        <>
          <div className="postHeader">
            <img src={user.avatar.url} alt="" />
            <span>
              <b>{user.name}</b>
            </span>
            {(post.userID === currentUser._id.toString() || currentUser.role === "admin") && <div className="menu" onClick={() => setOpen(!open)}>
              <GoKebabVertical />
              <div className={`postDropdown ${open ? "active" : "inactive"}`}>
                <ul>
                  {options.map((item, key) => {
                    return <DropdownItem item={item} postID={post._id} key={key} />;
                  })}
                </ul>
              </div>
            </div>}
          </div>
    
          <hr />
    
          <img src={post.img.url} alt="" />
    
          <hr />

          <div className="postReact">
            <img onClick={likeHandler} src={isLiked ? Like : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
          </div>

          <span className="likes">{likes} likes</span>
    
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
