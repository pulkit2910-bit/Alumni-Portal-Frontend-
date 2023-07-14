import React from "react";

const StudentVPLeft = ({ user }) => {
    const ProjectResearch = user.student_projects;
    const ExtraCurricular = user.student_activities;

  return (
    <div className="containsstudentlefteditprofile">
      <div>
        <div className="student-view-mode-left">
          <h4>Project & Researches :</h4>
          {ProjectResearch.map((prores, index) => (
            <div key={index}>
              {prores.title ? (
                <>
                  <h5>{prores.title}</h5>
                  <p>{prores.desc}</p>
                  <p>
                    {prores.link ? (
                      <a href={`https://${prores.link}`} target="_blank">
                        Link &#x1F517;
                      </a>
                    ) : (
                      <em>Validating Link N/A</em>
                    )}
                  </p>
                  {index ===
                  ProjectResearch.length - 1 ? null : ProjectResearch[index + 1]
                      .title === "" ? null : (
                    <hr />
                  )}
                </>
              ) : (
                (prores.title = "")
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
      <div className="student-view-mode-left">
          <h4>Extra Curricular Activities:</h4>
            {ExtraCurricular.map((extcur, index) => (
              <div key={index}>
                { extcur.title?(<>
                <h5>{extcur.title}</h5>
                <p>{extcur.desc}</p>
                <p>{extcur.link?(
                    <a href={`https://${extcur.link}`} target="_blank">
                        View Document &#x1F517;
                    </a>):(<em>Validating Document N/A</em>)
                    }
                </p>
                {index===(ExtraCurricular.length-1)?null:ExtraCurricular[index+1].title===''?null:(<hr/>)}
                </>
                ):
                (extcur.title='')}
              </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default StudentVPLeft;
