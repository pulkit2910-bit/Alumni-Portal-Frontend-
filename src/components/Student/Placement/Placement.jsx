import React, {useState} from 'react'
import './Placement.css'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";

const Placement = () => {

//for offers

    let [JobOffers, setJobOffers] = useState([
      { Company: '', Role: '', CTC: '', OfferType: '', SupportingDocument: null },
    ]);
    let [isEditPlacementMode1, setIsEditPlacementMode1] = useState(false);

    const handleJobOffersChange = (e, index, field) => {
      const updatedJobOffers = [...JobOffers];
      if (field === "SupportingDocument") {
        const file = e.target.files[0];
        updatedJobOffers[index].SupportingDocument = file;
      }
      else updatedJobOffers[index][field] = e.target.value;
      setJobOffers(updatedJobOffers);
    };

    const addJobOffers = () => {
      setJobOffers([...JobOffers, { Company: '', Role: '', CTC: '', OfferType: '', SupportingDocument: null }]);
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
      setIsEditPlacementMode1(false);
    };



//for experiences

    let [StudentExperiences, setStudentExperiences] = useState([
      { Company: '', Role: '', StartDate: '', EndDate: '', Description:'', SupportingDocument: null },
    ]);
    let [isEditPlacementMode2, setIsEditPlacementMode2] = useState(false);

    const handleStudentExperiencesChange = (e, index, field) => {
      const updatedStudentExperiences = [...StudentExperiences];
      if (field === "SupportingDocument") {
        const file = e.target.files[0];
        updatedStudentExperiences[index].SupportingDocument = file;
      }
      else updatedStudentExperiences[index][field] = e.target.value;
      setStudentExperiences(updatedStudentExperiences);
    };

    const addStudentExperiences = () => {
      setStudentExperiences([...StudentExperiences, { Company: '', Role: '', StartDate: '', EndDate: '', Description:'', SupportingDocument: null }]);
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
      setIsEditPlacementMode2(false);
    };



//for cracked exams

    let [AppearedExams, setAppearedExams] = useState([
      { ExamName: '', Result: '', Description: '', SupportingDocument: null },
    ]);
    let [isEditPlacementMode3, setIsEditPlacementMode3] = useState(false);

    const handleAppearedExamsChange = (e, index, field) => {
      const updatedAppearedExams = [...AppearedExams];
      if (field === "SupportingDocument") {
        const file = e.target.files[0];
        updatedAppearedExams[index].SupportingDocument = file;
      }
      else updatedAppearedExams[index][field] = e.target.value;
      setAppearedExams(updatedAppearedExams);
    };

    const addAppearedExams = () => {
      setAppearedExams([...AppearedExams, { ExamName: '', Result: '', Description: '', SupportingDocument: null}]);
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
      setIsEditPlacementMode3(false);
    };


  
//for higher education

    let [StudentHigherStudies, setStudentHigherStudies] = useState([
      { Institution: '', Degree: '', Description: '', SupportingDocument: null },
    ]);
    let [isEditPlacementMode4, setIsEditPlacementMode4] = useState(false);

    const handleStudentHigherStudiesChange = (e, index, field) => {
      const updatedStudentHigherStudies = [...StudentHigherStudies];
      if (field === "SupportingDocument") {
        const file = e.target.files[0];
        updatedStudentHigherStudies[index].SupportingDocument = file;
      }
      else updatedStudentHigherStudies[index][field] = e.target.value;
      setStudentHigherStudies(updatedStudentHigherStudies);
    };

    const addStudentHigherStudies = () => {
      setStudentHigherStudies([...StudentHigherStudies, { Institution: '', Degree: '', Description: '', SupportingDocument: null }]);
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
                  value={joboffer.Company}
                  onChange={(e) => handleJobOffersChange(e, index, 'Company')}
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={joboffer.Role}
                  onChange={(e) => handleJobOffersChange(e, index, 'Role')}
                />      
                <input
                  type="number"
                  placeholder="CTC (in ruppees)"
                  value={joboffer.CTC}
                  onChange={(e) => handleJobOffersChange(e, index, 'CTC')}
                  style={{ marginBottom: "5px", width: "75%" }}
                />
                <select value={joboffer.Type} defaultValue={"On-Campus"} onChange={(e) => handleJobOffersChange(e, index, 'Type')} style={{ marginBottom: "5px",width: "21%" }}>
                  <option value="On-Campus">On-Campus</option>
                  <option value="Off-Campus">Off-Campus</option>
                </select>  
                Supporting Document: <input
                  type="file"
                  placeholder="Supporting Document"
                  onChange={(e) =>
                    handleJobOffersChange(e, index, 'SupportingDocument')
                  }
                />
                <>
                  {joboffer.SupportingDocument && <span style={{ marginLeft: '8px' }}>Selected file:
                    <a href={URL.createObjectURL(joboffer.SupportingDocument)} target="_blank">
                      View Document
                    </a>
                  </span>}
                </>
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
                {joboffer.Company ? (<>
                  <h5>{joboffer.Company}</h5>
                  <p>{joboffer.Role}</p>
                  <p>CTC: &#8377;{joboffer.CTC}</p>
                  <p>{joboffer.Type}</p>
                  <p>{joboffer.SupportingDocument ? (
                    <a href={URL.createObjectURL(joboffer.SupportingDocument)} target="_blank">
                      View Document
                    </a>) : (<em>Supporting Document N/A</em>)
                  }
                  </p>
                  {index === (JobOffers.length - 1) ? null : JobOffers[index + 1].Company === '' ? null : (<hr />)}
                </>
                ) :
                  (joboffer.Company = '')}
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
                  placeholder="Company"
                  value={exp.Company}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'Company')}
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={exp.Role}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'Role')}
                />
                <input
                  type="text"
                  placeholder="Start Date"
                  value={exp.StartDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  style={{width: "47%" }}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'StartDate')}
                />
                <input
                  type="text"
                  placeholder="End Date"
                  value={exp.EndDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  style={{width: "46%" }}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'EndDate')}
                />
                <textarea
                  placeholder="Description"
                  value={exp.Description}
                  onChange={(e) => handleStudentExperiencesChange(e, index, 'Description')}
                />
                Supporting Document: <input
                  type="file"
                  placeholder="Supporting Document"
                  onChange={(e) =>
                    handleStudentExperiencesChange(e, index, 'SupportingDocument')
                  }
                />
                <>
                  {exp.SupportingDocument && <span style={{ marginLeft: '8px' }}>Selected file:
                    <a href={URL.createObjectURL(exp.SupportingDocument)} target="_blank">
                      View Document
                    </a>
                  </span>}
                </>
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
                {exp.Company ? (<>
                  <h5>{exp.Company}</h5>
                  <p>{exp.Role}</p>
                  <p>{formatDate(exp.StartDate)} {exp.EndDate?(<> - {formatDate(exp.EndDate)}</>):(<> - present</>)}</p>              
                  <p>{exp.Description}</p>
                  <p>{exp.SupportingDocument ? (
                    <a href={URL.createObjectURL(exp.SupportingDocument)} target="_blank">
                      View Document
                    </a>) : (<em>Supporting Document N/A</em>)
                  }
                  </p>
                  {index === (StudentExperiences.length - 1) ? null : StudentExperiences[index + 1].Company === '' ? null : (<hr />)}
                </>
                ) :
                  (exp.Company = '')}
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
                  placeholder="ExamName"
                  value={exam.ExamName}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'ExamName')}
                />
                <input
                  type="text"
                  placeholder="Result i.e rank, percentile, etc"
                  value={exam.Result}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'Result')}
                />
                <textarea
                  placeholder="Description"
                  value={exam.Description}
                  onChange={(e) => handleAppearedExamsChange(e, index, 'Description')}
                />
                Supporting Document: <input
                  type="file"
                  placeholder="Supporting Document"
                  onChange={(e) =>
                    handleAppearedExamsChange(e, index, 'SupportingDocument')
                  }
                />
                <>
                  {exam.SupportingDocument && <span style={{ marginLeft: '8px' }}>Selected file:
                    <a href={URL.createObjectURL(exam.SupportingDocument)} target="_blank">
                      View Document
                    </a>
                  </span>}
                </>
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
                {exam.ExamName ? (<>
                  <h5>{exam.ExamName}</h5>
                  <p>{exam.Result}</p>
                  <p>{exam.Description}</p>
                  <p>{exam.SupportingDocument ? (
                    <a href={URL.createObjectURL(exam.SupportingDocument)} target="_blank">
                      View Document
                    </a>) : (<em>Supporting Document N/A</em>)
                  }
                  </p>
                  {index === (AppearedExams.length - 1) ? null :AppearedExams[index + 1].ExamName === '' ? null : (<hr />)}
                </>
                ) :
                  (exam.ExamName = '')}
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
                  value={hstudy.Institution}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'Institution')}
                />
                <input
                  type="text"
                  placeholder="Degree, for example - M.Tech in Computer science"
                  value={hstudy.Degree}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'Degree')}
                />
                <textarea
                  placeholder="Description"
                  value={hstudy.Description}
                  onChange={(e) => handleStudentHigherStudiesChange(e, index, 'Description')}
                />
                Supporting Document: <input
                  type="file"
                  placeholder="Supporting Document"
                  onChange={(e) =>
                    handleStudentHigherStudiesChange(e, index, 'SupportingDocument')
                  }
                />
                <>
                  {hstudy.SupportingDocument && <span style={{ marginLeft: '8px' }}>Selected file:
                    <a href={URL.createObjectURL(hstudy.SupportingDocument)} target="_blank">
                      View Document
                    </a>
                  </span>}
                </>
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
                {hstudy.Institution ? (<>
                  <h5>{hstudy.Institution}</h5>
                  <p>{hstudy.Degree}</p>
                  <p>{hstudy.Description}</p>
                  <p>{hstudy.SupportingDocument ? (
                    <a href={URL.createObjectURL(hstudy.SupportingDocument)} target="_blank">
                      View Document
                    </a>) : (<em>Supporting Document N/A</em>)
                  }
                  </p>
                  {index === (StudentHigherStudies.length - 1) ? null : StudentHigherStudies[index + 1].Institution === '' ? null : (<hr />)}
                </>
                ) :
                  (hstudy.Institution = '')}
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