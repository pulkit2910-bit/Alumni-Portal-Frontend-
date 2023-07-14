import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";

const StudentVPRight = ({ user }) => {
  let email = user.email;
  let altEmail = user.altEmail;
  let phoneNo = user.phoneNo;
  let altPhoneNo = user.altPhoneNo;
  let socialHandles = user.socialHandles;
  let Achievements = user.student_achievements;
  return (
    <div>
      <div>
        <div className="view-mode-right">
          <h4>
            Contacts <AiOutlineContacts /> :
          </h4>
          {email ? <p>Email: {email}</p> : (email = "")}
          {altEmail ? <p>Alternate Email: {altEmail}</p> : (altEmail = "")}
          {phoneNo ? <p>Phone Number: +{phoneNo}</p> : (phoneNo = "")}
          {altPhoneNo ? (
            <p>Alternate Phone Number: +{altPhoneNo}</p>
          ) : (
            (altPhoneNo = "")
          )}
          <hr />
          <h4>
            Social Handles <SlSocialInstagram /> <SlSocialLinkedin />{" "}
            <SlSocialTwitter /> :
          </h4>
          <ul>
            {socialHandles.map((socm, index) => (
              <li key={index}>
                {<a href={socm.profilelink}>{socm.socialmedianame}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="student-view-mode-right">
          <h4>
            Achievements <GrAchievement /> :
          </h4>
          {Achievements.map((Achievement, index) => (
            <div key={index}>
              {Achievement.title ? (
                <>
                  <h5>{Achievement.title}</h5>
                  <p>{Achievement.desc}</p>
                  <p>
                    {Achievement.link ? (
                      <a href={`https://${Achievement.link}`} target="_blank">
                        View Document &#x1F517;
                      </a>
                    ) : (
                      <em>Validating Document N/A</em>
                    )}
                  </p>
                  {index === Achievements.length - 1 ? null : Achievements[
                      index + 1
                    ].title === "" ? null : (
                    <hr />
                  )}
                </>
              ) : (
                (Achievement.title = "")
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentVPRight;
