import React, { useState } from "react";
import "./Post.css";
import PostImg from "../../../img/cover.jpg";
import ProfilePic from "../../../img/img1.png";

// icons
import { GoKebabVertical } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Post = ({profile}) => {
  const [open, setOpen] = useState(false);
  const options = [
    { label: "Edit Post", icon: <CiEdit />, id: 0 },
    { label: "Delete Post", icon: <MdDelete />, id: 1 },
  ];

  const DropdownItem = ({ item, postID }) => {
    // const {posts, dispatch} = useContext(FeedContext);
  
    const handleClick = (e) => {
      e.preventDefault();
      // if (item.id === 0) {
      //   // edit post
      // } else if (item.id === 1) {
      //   // delete post
      //   deletePost(posts, postID, dispatch);
      // }
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

  return (
    <div className="Post">
      <div className="postHeader">
        <img src={ProfilePic} alt="" />
        <span>
          <b>Nishul</b>
        </span>
        {profile && (
          <div className="menu" onClick={() => setOpen(!open)}>
            <GoKebabVertical />
            <div className={`postDropdown ${open ? "active" : "inactive"}`}>
              <ul>
                {options.map((item, key) => {
                  return (
                    <DropdownItem item={item} postID={1} key={key} />
                    // <DropdownItem item={item} postID={post._id} key={key} />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      <hr />

      {/* Add white bg div */}

      <img src={PostImg} alt="" />

      <hr />

      {/* <div className="postReact">
        <img onClick={likeHandler} src={isLiked ? Like : NotLike} alt="" />
        <Link to={`/post/${post._id}`}>
          <img src={Comment} alt="" />
        </Link>
        <img src={Share} alt="" />
      </div> */}

      {/* <span className="likes">{likes} likes</span> */}

      <div className="details">
        <span>Nishul</span>
        <span>New Job alert</span>
      </div>
      <div className="postBottom">
        {/* <TimeAgo date={post.createdAt} /> */}
        1hr ago
      </div>
    </div>
  );
};

export default Post;
