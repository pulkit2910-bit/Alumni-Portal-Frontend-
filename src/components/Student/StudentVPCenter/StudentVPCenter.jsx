import React from 'react'
import Cover from "../../../../src/img/cover.jpg";
import Grades from '../Grades/Grades';
import ViewPlacement from '../ViewPlacement/ViewPlacement';

const StudentVPCenter = ({ user }) => {
  let name = user.name;
  let title = user.title;
  let rollNumber = user.rollNumber;
  let location = user.location;
  let about = user.about;
  let skills = user.skills;

  return (
    <div className="student-profile-page">
      <div className="StudentProfilepageCard">
      <div className="StudentProfilepageImages">
        <img className="student-profilepage-cover" src={Cover} alt="" />
        <div className="profilePic">
          <img src={user.avatar.url} alt="" />
        </div>
      </div>
      <div className="StudentProfilepageName">
        <span>{name}</span>
        <span>{rollNumber}</span>
      </div>
      <div className='student-profilepageCard-options'>
        <div>
            {title}
        </div>
        <div>
            {location}
        </div>
      </div>
      </div>
      <div className="student-view-mode">
        <h4>About</h4>
        <p>{about}</p>
        <h4>Skills</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {user?.role === "outgoing_student" && <ViewPlacement user={user} />}
      <Grades />
    </div>
  )
}

export default StudentVPCenter
