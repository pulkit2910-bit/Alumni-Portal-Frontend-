import React from "react";

const ViewPlacement = ({ user }) => {
  const JobOffers = user.student_job_offers;
  const StudentExperiences = user.student_job_experiences;
  const AppearedExams = user.student_competitive_exams;
  const StudentHigherStudies = user.student_higher_studies;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="placement">
      <h3> Out-Going Students Data</h3>
      {/* Placement Details */}
      <div>
        <div className="placement-view-mode-left">
          <h4>Job offers :</h4>
          {JobOffers.map((joboffer, index) => (
            <div key={index}>
              {joboffer.company ? (
                <>
                  <h5>{joboffer.company}</h5>
                  <p>{joboffer.role}</p>
                  {joboffer.ctc && <p> ctc: &#8377;{joboffer.ctc}</p>}
                  <p>{joboffer.type}</p>
                  <p>
                    {joboffer.link ? (
                      <a href={`https://${joboffer.link}`} target="_blank">
                        View Document &#x1F517;
                      </a>
                    ) : (
                      <em>Validating Document N/A</em>
                    )}
                  </p>
                  {index === JobOffers.length - 1 ? null : JobOffers[index + 1].company === "" ? null : <hr />}
                </>
              ) : (
                (joboffer.company = "")
              )}
            </div>
          ))}
        </div>
      </div>
        
      {/* Job Experiences */}
      <div>
        <div className="placement-view-mode-left">
            <h4>Experiences :</h4>
            {StudentExperiences.map((exp, index) => (
              <div key={index}>
                {exp.company ? (<>
                  <h5>{exp.company}</h5>
                  <p>{exp.role}</p>
                  <p>{formatDate(exp.startDate)} {exp.endDate?(<> - {formatDate(exp.endDate)}</>):(<> - present</>)}</p>              
                  <p>{exp.desc}</p>
                  <p>{exp.link ? (
                    <a href={`https://${exp.link}`} target="_blank">
                      View Document &#x1F517;
                    </a>) : (<em>Validating Document N/A</em>)
                  }
                  </p>
                  {index === (StudentExperiences.length - 1) ? null : StudentExperiences[index + 1].company === '' ? null : (<hr />)}
                </>
                ) :
                  (exp.company = '')}
              </div>
            ))}
        </div>
      </div>

      {/* Cracked Exams */}
      <div>
        <div className="placement-view-mode-left">
            <h4>Appeared Competitive Exams :</h4>
            {AppearedExams.map((exam, index) => (
              <div key={index}>
                {exam.examName ? (<>
                  <h5>{exam.examName}</h5>
                  <p>{exam.result}</p>
                  <p>{exam.desc}</p>
                  <p>{exam.link ? (
                    <a href={`https://${exam.link}`} target="_blank">
                      View Document &#x1F517;
                    </a>) : (<em>Validating Document N/A</em>)
                  }
                  </p>
                  {index === (AppearedExams.length - 1) ? null :AppearedExams[index + 1].examName === '' ? null : (<hr />)}
                </>
                ) :
                  (exam.examName = '')}
              </div>
            ))}
        </div>          
      </div>
      
      {/* Higher studies */}
      <div>
        <div className="placement-view-mode-left" style={{ marginBottom: '0px' }}>
            <h4>Willing to Pursue Higher Studies :</h4>
            {StudentHigherStudies.map((hstudy, index) => (
              <div key={index}>
                {hstudy.institution ? (<>
                  <h5>{hstudy.institution}</h5>
                  <p>{hstudy.degree}</p>
                  <p>{hstudy.desc}</p>
                  <p>{hstudy.link ? (
                    <a href={`https://${hstudy.link}`} target="_blank">
                      View Document &#x1F517;
                    </a>) : (<em>Validating Document N/A</em>)
                  }
                  </p>
                  {index === (StudentHigherStudies.length - 1) ? null : StudentHigherStudies[index + 1].institution === '' ? null : (<hr />)}
                </>
                ) :
                  (hstudy.institution = '')}
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default ViewPlacement;
