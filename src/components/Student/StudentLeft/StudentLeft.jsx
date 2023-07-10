import React, {useState} from 'react'
import './StudentLeft.css'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { upload } from '@testing-library/user-event/dist/upload';

const StudentLeft = () => {


//for research and projects edit button

let [ProjectResearch, setProjectResearch] = useState([
  { Title: '', Description: '', SupportingLink: '', SupportingDocument: null },
]);
let [isEditLeftMode, setIsEditLeftMode] = useState(false);

const handleProjectResearchChange = (e, index, field) => {
  const updatedProjectResearch = [...ProjectResearch];
  if (field === "SupportingDocument") {
    const file = e.target.files[0];
    updatedProjectResearch[index].SupportingDocument = file;
  }
  else updatedProjectResearch[index][field] = e.target.value;
  setProjectResearch(updatedProjectResearch);
};

const addProjectResearch = () => {
  setProjectResearch([...ProjectResearch, { Title: '', Description: '', SupportingLink: '', SupportingDocument: null }]);
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
  console.log(ProjectResearch)
  setIsEditLeftMode(false);
};


//for ExtraCurriculars edit button

const [ExtraCurricular, setExtraCurricular] = useState([  { Title: '', Description: '', SupportingLink: '', SupportingDocument: '' },]); //it's an array of objects
let [isEditLeft2Mode, setIsEditLeft2Mode] = useState(false);

const handleLeft2EditClick = () => {
  setIsEditLeft2Mode(true);
};

const handleLeft2SaveClick = () => {
  console.log(ExtraCurricular)
  setIsEditLeft2Mode(false);
};

const handleExtraCurricularChange = (e, index, field) => {
  const updatedExtraCurricular = [...ExtraCurricular];
  if (field === "SupportingDocument") {
    const file = e.target.files[0];
    updatedExtraCurricular[index].SupportingDocument = file;
  }
  else updatedExtraCurricular[index][field] = e.target.value;
  setExtraCurricular(updatedExtraCurricular);
};

const addExtraCurricular = () => {
  setExtraCurricular([...ExtraCurricular, { Title: '', Description: '', SupportingLink: '', SupportingDocument: '' }]);
};

const deleteExtraCurricular = (index) => {
  const updatedExtraCurricular = [...ExtraCurricular];
  updatedExtraCurricular.splice(index, 1);
  setExtraCurricular(updatedExtraCurricular);
};

//html/jsx code
return (
  <div id="containsstudentlefteditprofile">
  <div>
    {isEditLeftMode ? (
      <div className="student-edit-mode-left">
        <label htmlFor="ProjectResearch">Projects & Researches :</label>
        {ProjectResearch.map((prores, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Title"
              value={prores.Title}
              onChange={(e) => handleProjectResearchChange(e, index, 'Title')}
            />
            <textarea
              placeholder="Description"
              value={prores.Description}
              onChange={(e) => handleProjectResearchChange(e, index, 'Description')}
            />
            <input
              type="text"
              placeholder="Supporting Link"
              value={prores.SupportingLink}
              onChange={(e) => handleProjectResearchChange(e, index, 'SupportingLink')} 
              style={{ marginBottom: "5px"}}           
            />
            Supporting Document: <input
                type="file"
                placeholder="Supporting Document"
                onChange={(e) =>
                  handleProjectResearchChange(e, index, 'SupportingDocument')
                }
            />
            <>
            {prores.SupportingDocument && <span style={{marginLeft:'8px'}}>Selected file:
              <a href={URL.createObjectURL(prores.SupportingDocument)} target="_blank">
                  View Document
              </a>
              </span>}
            </>
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
          { prores.Title?(<>
          <h5>{prores.Title}</h5>
          <p>{prores.Description}</p>
          <p>{prores.SupportingDocument?(
              <a href={URL.createObjectURL(prores.SupportingDocument)} target="_blank">
                  View Document
              </a>):(<>N/A</>)
              }
          </p>
          <p>{prores.SupportingLink?(
              <a href={(prores.SupportingLink)} target="_blank">
                   Link &#x1F517;
              </a>):(<>N/A</>)
              }
          </p>
          {index===(ProjectResearch.length-1)?null:ProjectResearch[index+1].Title===''?null:(<hr/>)}
          </>
          ):
          (prores.Title='')}
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
                  value={extcur.Title}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'Title')}
                />
                <textarea
                  placeholder="Description"
                  value={extcur.Description}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'Description')}
                />
                <input
                  type="text"
                  placeholder="Supporting Link"
                  value={extcur.SupportingLink}
                  onChange={(e) => handleExtraCurricularChange(e, index, 'SupportingLink')}            
                />
                Supporting Document: <input
                    type="file"
                    placeholder="Supporting Document"
                    onChange={(e) =>
                      handleExtraCurricularChange(e, index, 'SupportingDocument')
                    }
                />
                <>
                {extcur.SupportingDocument && <span style={{marginLeft:'8px'}}>Selected file:
                  <a href={URL.createObjectURL(extcur.SupportingDocument)} target="_blank">
                      View Document
                  </a>
                  </span>
                }
                </>
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
                { extcur.Title?(<>
                <h5>{extcur.Title}</h5>
                <p>{extcur.Description}</p>
                <p>{extcur.SupportingDocument?(
                    <a href={URL.createObjectURL(extcur.SupportingDocument)} target="_blank">
                        View Document
                    </a>):(<>N/A</>)
                    }
                </p>
                <p>{extcur.SupportingDocument?(
                    <a href={(extcur.SupportingLink)} target="_blank">
                        Link &#x1F517;
                    </a>):(<>N/A</>)
                    }
                </p>
                {index===(ExtraCurricular.length-1)?null:ExtraCurricular[index+1].Title===''?null:(<hr/>)}
                </>
                ):
                (extcur.Title='')}
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
