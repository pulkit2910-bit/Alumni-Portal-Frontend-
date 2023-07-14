import React, {useState} from 'react'
import './StudentLeft.css'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { updateCurricularActivities, updateProject } from '../../../apiCalls/current_student';

const StudentLeft = ({ user }) => {


//for research and projects edit button

let [ProjectResearch, setProjectResearch] = useState(user.student_projects);
let [isEditLeftMode, setIsEditLeftMode] = useState(false);

const handleProjectResearchChange = (e, index, field) => {
  const updatedProjectResearch = [...ProjectResearch];
  updatedProjectResearch[index][field] = e.target.value;
  setProjectResearch(updatedProjectResearch);
};

const addProjectResearch = () => {
  setProjectResearch([...ProjectResearch, { title: '', desc: '', link: '' }]);
};

const deleteProjectResearch = (index) => {
  const updatedProjectResearch = [...ProjectResearch];
  updatedProjectResearch.splice(index, 1);
  setProjectResearch(updatedProjectResearch);
};

const handleLeftEditClick = () => {
  setIsEditLeftMode(true);
};

const handleLeftSaveClick = () => {
  updateProject(ProjectResearch);
  setIsEditLeftMode(false);
};


//for ExtraCurriculars edit button

const [ExtraCurricular, setExtraCurricular] = useState(user.student_activities); //it's an array of objects
let [isEditLeft2Mode, setIsEditLeft2Mode] = useState(false);

const handleLeft2EditClick = () => {
  setIsEditLeft2Mode(true);
};

const handleLeft2SaveClick = () => {
  updateCurricularActivities(ExtraCurricular);
  setIsEditLeft2Mode(false);
};

const handleExtraCurricularChange = (e, index, field) => {
  const updatedExtraCurricular = [...ExtraCurricular];
  updatedExtraCurricular[index][field] = e.target.value;
  setExtraCurricular(updatedExtraCurricular);
};

const addExtraCurricular = () => {
  setExtraCurricular([...ExtraCurricular, { title: '', desc: '', link: '' }]);
};

const deleteExtraCurricular = (index) => {
  const updatedExtraCurricular = [...ExtraCurricular];
  updatedExtraCurricular.splice(index, 1);
  setExtraCurricular(updatedExtraCurricular);
};

//html/jsx code
return (
  <div className="containsstudentlefteditprofile">
  <div>
    {isEditLeftMode ? (
      <div className="student-edit-mode-left">
        <label htmlFor="ProjectResearch">Projects & Researches :</label>
        {ProjectResearch.map((prores, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Title"
              value={prores.title}
              onChange={(e) => handleProjectResearchChange(e, index, 'title')}
            />
            <textarea
              placeholder="Description"
              value={prores.desc}
              onChange={(e) => handleProjectResearchChange(e, index, 'desc')}
            />
            <input
              type="text"
              placeholder="Upload link of your Project/Research"
              value={prores.link}
              onChange={(e) => handleProjectResearchChange(e, index, 'link')} 
              style={{ marginBottom: "5px"}}           
            />
            {index !== 0 && (
              <button className="proresbutton" onClick={() => deleteProjectResearch(index)}>Delete</button>
            )}
          </div>
        ))}
        <div className="buttonatend">
    <button className="proresbutton" onClick={addProjectResearch}>Add</button>
    <button className="proresbutton" onClick={handleLeftSaveClick}><AiOutlineSave/></button>
    </div>
  </div>
  ) : (
    <div className="student-view-mode-left">
      <h4>Project & Researches :</h4>
      {ProjectResearch.map((prores, index) => (
      <div key={index}>
          { prores.title?(<>
          <h5>{prores.title}</h5>
          <p>{prores.desc}</p>
          <p>{prores.link?(
              <a href={`https://${prores.link}`} target="_blank">
                   Link &#x1F517;
              </a>):(<em>Validating Link N/A</em>)
              }
          </p>
          {index===(ProjectResearch.length-1)?null:ProjectResearch[index+1].title===''?null:(<hr/>)}
          </>
          ):
          (prores.title='')}
      </div>
      ))}<div className="buttonatend2">
          <button className="proresbutton" onClick={handleLeftEditClick}><AiOutlineEdit/></button>
        </div>
      </div>
    )}
</div>


    <div>
        {isEditLeft2Mode ? (
          <div className="student-edit-mode-left">
            <label htmlFor="ExtraCurricular">Extra Curricular Activities :</label>
            {ExtraCurricular.map((extcur, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Title"
                  value={extcur.title}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'title')}
                />
                <textarea
                  placeholder="Description"
                  value={extcur.desc}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'desc')}
                />
                <input
                  type="text"
                  placeholder="Upload G-drive link of Validating Document"
                  value={extcur.link}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'link')}            
                />
                {index !== 0 && (
                  <button className="proresbutton" onClick={() => deleteExtraCurricular(index)}>Delete</button>
                )}
              </div>
            ))}
            <div className="buttonatend">
        <button className="proresbutton" onClick={addExtraCurricular}>Add</button>
        <button className="proresbutton" onClick={handleLeft2SaveClick}><AiOutlineSave/></button>
        </div>
      </div>
      ) : (
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
          <div className="buttonatend2">
              <button className="proresbutton" onClick={handleLeft2EditClick}><AiOutlineEdit/></button>
            </div>
          </div>
        )}
    </div>

  </div>
)
};

export default StudentLeft
