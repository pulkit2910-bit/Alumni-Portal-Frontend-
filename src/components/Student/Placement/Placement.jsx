import React, {useState} from 'react'
import './Placement.css'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { updateCompetitiveExams, updateHigherStudies, updateJobExperiences, updateJobOffers } from '../../../apiCalls/outgoing_student';

const Placement = ({ user }) => {

//for offers

    let [JobOffers, setJobOffers] = useState(user.student_job_offers);
    let [isEditPlacementMode1, setIsEditPlacementMode1] = useState(false);

    const handleJobOffersChange = (e, index, field) => {
      const updatedJobOffers = [...JobOffers];
      updatedJobOffers[index][field] = e.target.value;
      setJobOffers(updatedJobOffers);
    };

    const addJobOffers = () => {
      setJobOffers([...JobOffers, { company: '', role: '', ctc: '', type: 'On-Campus', link: '' }]);
    };

    const deleteJobOffers = (index) => {
      const updatedJobOffers = [...JobOffers];
      updatedJobOffers.splice(index, 1);
      setJobOffers(updatedJobOffers);
    };

    const handlePlacementEditClick1 = () => {
      setIsEditPlacementMode1(true);
    };

    const handlePlacementSaveClick1 = () => {
      updateJobOffers(JobOffers);
      setIsEditPlacementMode1(false);
    };



//for experiences

    let [StudentExperiences, setStudentExperiences] = useState(user.student_job_experiences);
    let [isEditPlacementMode2, setIsEditPlacementMode2] = useState(false);

    const handleStudentExperiencesChange = (e, index, field) => {
      const updatedStudentExperiences = [...StudentExperiences];
      updatedStudentExperiences[index][field] = e.target.value;
      setStudentExperiences(updatedStudentExperiences);
    };

    const addStudentExperiences = () => {
      setStudentExperiences([...StudentExperiences, { company: '', role: '', startDate: '', endDate: '', desc:'', link: '' }]);
    };

    const deleteStudentExperiences = (index) => {
      const updatedStudentExperiences = [...StudentExperiences];
      updatedStudentExperiences.splice(index, 1);
      setStudentExperiences(updatedStudentExperiences);
    };

    const handlePlacementEditClick2 = () => {
      setIsEditPlacementMode2(true);
    };

    const handlePlacementSaveClick2 = () => {
      updateJobExperiences(StudentExperiences);
      setIsEditPlacementMode2(false);
    };



//for cracked exams

    let [AppearedExams, setAppearedExams] = useState(user.student_competitive_exams);
    let [isEditPlacementMode3, setIsEditPlacementMode3] = useState(false);

    const handleAppearedExamsChange = (e, index, field) => {
      const updatedAppearedExams = [...AppearedExams];
      updatedAppearedExams[index][field] = e.target.value;
      setAppearedExams(updatedAppearedExams);
    };

    const addAppearedExams = () => {
      setAppearedExams([...AppearedExams, { examName: '', result: '', desc: '', link: ''}]);
    };

    const deleteAppearedExams = (index) => {
      const updatedAppearedExams = [...AppearedExams];
      updatedAppearedExams.splice(index, 1);
      setAppearedExams(updatedAppearedExams);
    };

    const handlePlacementEditClick3 = () => {
      setIsEditPlacementMode3(true);
    };

    const handlePlacementSaveClick3 = () => {
      updateCompetitiveExams(AppearedExams);
      setIsEditPlacementMode3(false);
    };


  
//for higher education

    let [StudentHigherStudies, setStudentHigherStudies] = useState(user.student_higher_studies);
    let [isEditPlacementMode4, setIsEditPlacementMode4] = useState(false);

    const handleStudentHigherStudiesChange = (e, index, field) => {
      const updatedStudentHigherStudies = [...StudentHigherStudies];
      updatedStudentHigherStudies[index][field] = e.target.value;
      setStudentHigherStudies(updatedStudentHigherStudies);
    };

    const addStudentHigherStudies = () => {
      setStudentHigherStudies([...StudentHigherStudies, { institution: '', degree: '', desc: '', link: '' }]);
    };

    const deleteStudentHigherStudies = (index) => {
      const updatedStudentHigherStudies = [...StudentHigherStudies];
      updatedStudentHigherStudies.splice(index, 1);
      setStudentHigherStudies(updatedStudentHigherStudies);
    };

    const handlePlacementEditClick4 = () => {
      setIsEditPlacementMode4(true);
    };

    const handlePlacementSaveClick4 = () => {
      updateHigherStudies(StudentHigherStudies)
      setIsEditPlacementMode4(false);
    };

//extra fuctions

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };


  return (
    <div className='placement'>
    <h3> Out-Going Students Data</h3>

{/* 1. placement stats */}

      <div>
        {isEditPlacementMode1 ? (
          <div className="placement-edit-mode-left">
            <label htmlFor="JobOffers">Job Offers :</label>
            {JobOffers.map((joboffer, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Company"
                  value={joboffer.company}
                  onChange={(e) => handleJobOffersChange(e, index, 'company')}
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={joboffer.role}
                  onChange={(e) => handleJobOffersChange(e, index, 'role')}
                />      
                <input
                  type="number"
                  placeholder="CTC (in ruppees)"
                  value={joboffer.ctc}
                  onChange={(e) => handleJobOffersChange(e, index, 'ctc')}
                  style={{ marginBottom: "5px", width: "75%" }}
                />
                <select value={joboffer.type} onChange={(e) => handleJobOffersChange(e, index, 'type')} style={{ marginBottom: "5px",width: "21%" }}>
                  <option value='On-Campus'>On-Campus</option>
                  <option value='Off-Campus'>Off-Campus</option>
                </select>  
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document (or any Cloud Storage Link)"
                  value={joboffer.link}
                  onChange={(e) =>
                    handleJobOffersChange(e, index, 'link')
                  }
                /> 
                {index !== 0 && (
                  <button className="placementbutton" onClick={() => deleteJobOffers(index)}>Delete</button>
                )}
              </div>
            ))}
            <div className="placementbuttonatend">
              <button className="placementbutton" onClick={addJobOffers}>Add</button>
              <button className="placementbutton" onClick={handlePlacementSaveClick1}><AiOutlineSave /></button>
            </div>
          </div>
        ) : (
          <div className="placement-view-mode-left">
            <h4>Job offers :</h4>
            {JobOffers.map((joboffer, index) => (
              <div key={index}>
                {joboffer.company ? (<>
                  <h5>{joboffer.company}</h5>
                  <p>{joboffer.role}</p>
                  {joboffer.ctc && <p> ctc: &#8377;{joboffer.ctc }</p>}
                  <p>{joboffer.type}</p>
                  <p>{joboffer.link ? (
                    <a href={`https://${joboffer.link}`} target="_blank">
                      View Document &#x1F517;
                    </a>) : (<em>Validating Document N/A</em>)
                  }
                  </p>
                  {index === (JobOffers.length - 1) ? null : JobOffers[index + 1].company === '' ? null : (<hr />)}
                </>
                ) :
                  (joboffer.company = '')}
              </div>
            ))}<div className="placementbuttonatend2">
              <button className="placementbutton" onClick={handlePlacementEditClick1}><AiOutlineEdit /></button>
            </div>
          </div>
        )}
      </div>

{/* 2. Experiences */}

<div>
        {isEditPlacementMode2 ? (
          <div className="placement-edit-mode-left">
            <label htmlFor="Experiences">Experiences :</label>
            {StudentExperiences.map((exp, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="company"
                  value={exp.company}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'company')}
                />
                <input
                  type="text"
                  placeholder="role"
                  value={exp.role}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'role')}
                />
                <input
                  type="text"
                  placeholder="Start Date"
                  value={exp.startDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  style={{width: "47%" }}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'startDate')}
                />
                <input
                  type="text"
                  placeholder="End Date"
                  value={exp.endDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  style={{width: "46%" }}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'endDate')}
                />
                <textarea
                  placeholder="desc"
                  value={exp.desc}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'desc')}
                />
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document (or any Cloud Storage Link)"
                  value={exp.link}
                  onChange={(e) =>
                    handleStudentExperiencesChange(e, index, 'link')
                  }
                />
                {index !== 0 && (
                  <button className="placementbutton" onClick={() => deleteStudentExperiences(index)}>Delete</button>
                )}
              </div>
            ))}
            <div className="placementbuttonatend">
              <button className="placementbutton" onClick={addStudentExperiences}>Add</button>
              <button className="placementbutton" onClick={handlePlacementSaveClick2}><AiOutlineSave /></button>
            </div>
          </div>
        ) : (
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
            ))}<div className="placementbuttonatend2">
              <button className="placementbutton" onClick={handlePlacementEditClick2}><AiOutlineEdit /></button>
            </div>
          </div>
        )}
      </div>

{/* 3. Cracked Exams */}

<div>
        {isEditPlacementMode3 ? (
          <div className="placement-edit-mode-left">
            <label htmlFor="ApperedExams">Appeared Comepetitive Exams :</label>
            {AppearedExams.map((exam, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Exam Name"
                  value={exam.examName}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'examName')}
                />
                <input
                  type="text"
                  placeholder="Result i.e rank, percentile, etc"
                  value={exam.result}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'result')}
                />
                <textarea
                  placeholder="Description"
                  value={exam.desc}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'desc')}
                />
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document (or any Cloud Storage Link)"
                  value={exam.link}
                  onChange={(e) =>
                    handleAppearedExamsChange(e, index, 'link')
                  }
                />
                {index !== 0 && (
                  <button className="placementbutton" onClick={() => deleteAppearedExams(index)}>Delete</button>
                )}
              </div>
            ))}
            <div className="placementbuttonatend">
              <button className="placementbutton" onClick={addAppearedExams}>Add</button>
              <button className="placementbutton" onClick={handlePlacementSaveClick3}><AiOutlineSave /></button>
            </div>
          </div>
        ) : (
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
            ))}<div className="placementbuttonatend2">
              <button className="placementbutton" onClick={handlePlacementEditClick3}><AiOutlineEdit /></button>
            </div>
          </div>
        )}
      </div>

{/* 4. Higher studies stats */}

<div>
        {isEditPlacementMode4 ? (
          <div className="placement-edit-mode-left" style={{ marginBottom: '0px' }}>
            <label htmlFor="StudentsHigherStudies">Willing to Pursue Higher Studies :</label>
            {StudentHigherStudies.map((hstudy, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Institution"
                  value={hstudy.institution}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'institution')}
                />
                <input
                  type="text"
                  placeholder="Degree, for example - M.Tech in Computer science"
                  value={hstudy.degree}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'degree')}
                />
                <textarea
                  placeholder="desc"
                  value={hstudy.desc}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'desc')}
                />
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document (or any Cloud Storage Link)"
                  value={hstudy.link}
                  onChange={(e) =>
                    handleStudentHigherStudiesChange(e, index, 'link')
                  }
                />
                {index !== 0 && (
                  <button className="placementbutton" onClick={() => deleteStudentHigherStudies(index)}>Delete</button>
                )}
              </div>
            ))}
            <div className="placementbuttonatend">
              <button className="placementbutton" onClick={addStudentHigherStudies}>Add</button>
              <button className="placementbutton" onClick={handlePlacementSaveClick4}><AiOutlineSave /></button>
            </div>
          </div>
        ) : (
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
            ))}<div className="placementbuttonatend2">
              <button className="placementbutton" onClick={handlePlacementEditClick4}><AiOutlineEdit /></button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Placement