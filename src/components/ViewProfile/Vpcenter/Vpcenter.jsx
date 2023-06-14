import React from "react";
import '../../Profile/ProfileCenter/ProfileCenter.css'
import Cover from "../../../../src/img/cover.jpg";
import ProfilePic from "../../../../src/img/img1.png";

const Vpcenter = () => {
  const name='John Doe';
  const title='Software Engineer';
  const location='San Francisco, CA';
  const about=('Experienced software engineer with a passion for web development.');
  const skills=['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS'];

  return (
    <div className="profile-page">
      <div className="ProfilepageCard">
      <div className="ProfilepageImages">
        <img className="profilepage-cover" src={Cover} alt="" />
        <img src={ProfilePic} alt="" />
      </div>
      <div className="ProfilepageName">
        <span>{name}</span>
      </div>
      <div className='profilepageCard-options'>
        <div>
            {title}
        </div>
        <div>
            {location}
        </div>
      </div>
      </div>
        <div className="view-mode">
          <h4>About</h4>
          <p>{about}</p>

          <h4>Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Vpcenter;