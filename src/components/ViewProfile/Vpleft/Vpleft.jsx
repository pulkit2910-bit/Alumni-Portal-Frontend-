import React, { useState } from "react";
import "../../Profile/ProfileLeft/ProfileLeft.css";

const Vpleft = ({ user }) => {
  const [ProjectResearch, setProjectResearch] = useState(user.student_projects);
  const [ExtraCurricular, setExtraCurricular] = useState(
    user.student_activities
  );

  let education = user.education;
  let experience = user.experience;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  //html/jsx code
  return (
    <div id="containslefteditprofile">
      <div>
        <div className="view-mode-left">
          <h4>Education :</h4>
          {education?.map((edu, index) => (
            <div key={index}>
              {edu.institution ? (
                <>
                  <h5>{edu.institution}</h5>
                  <p>{edu.degree}</p>
                  <p>
                    {formatDate(edu.startDate)}{" "}
                    {edu.endDate ? (
                      <> - {formatDate(edu.endDate)}</>
                    ) : (
                      <> - present</>
                    )}
                  </p>
                  {index === education.length - 1 ? null : education[index + 1]
                      .institution === "" ? null : (
                    <hr />
                  )}
                </>
              ) : (
                (edu.company = "")
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="view-mode-left">
          <h4>Experience:</h4>
          {experience?.map((exp, index) => (
            <div key={index}>
              {exp.company ? (
                <>
                  <h5>{exp.company}</h5>
                  <p>{exp.position}</p>
                  <p>
                    {formatDate(exp.startDate)}{" "}
                    {exp.endDate ? (
                      <> - {formatDate(exp.endDate)}</>
                    ) : (
                      <> - present</>
                    )}
                  </p>
                  {index === experience.length - 1 ? null : experience[
                      index + 1
                    ].company === "" ? null : (
                    <hr />
                  )}
                </>
              ) : (
                (exp.company = "")
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vpleft;
