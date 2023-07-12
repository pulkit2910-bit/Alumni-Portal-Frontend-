import React, { useContext } from 'react';
import "./Student.css"
import StudentLeft from '../../components/Student/StudentLeft/StudentLeft';
import StudentCenter from '../../components/Student/StudentCenter/StudentCenter';
import StudentRight from '../../components/Student/StudentRight/StudentRight';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Navbar from '../../components/Navbar/Navbar';

const Student = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className='Student'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="student-middle">
        <StudentLeft user={user} />
        <StudentCenter user={user}/>
        <StudentRight user={user} />
      </div>
    </div>
    )
  }


export default Student;



































// const Student = () => {
//   const [profile, setProfile] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//     rollNumber: '',
//     profilePic: '',
//   });

//   const [achievements, setAchievements] = useState([]);
//   const [curricularActivities, setCurricularActivities] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [research, setResearch] = useState([]);

//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [isEditingAchievements, setIsEditingAchievements] = useState(false);
//   const [isEditingCurricularActivities, setIsEditingCurricularActivities] = useState(false);
//   const [isEditingProjects, setIsEditingProjects] = useState(false);
//   const [isEditingResearch, setIsEditingResearch] = useState(false);

//   const handleProfilePicUpload = (event) => {
//     // Handle file upload logic
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleEditProfileClick = () => {
//     setIsEditingProfile(true);
//   };

//   const handleSaveProfileClick = () => {
//     setIsEditingProfile(false);
//   };

//   const handleAchievementAdd = () => {
//     setAchievements([...achievements, { title: '', description: '', supportingDocument: null }]);
//   };

//   const handleAchievementDelete = (index) => {
//     const updatedAchievements = [...achievements];
//     updatedAchievements.splice(index, 1);
//     setAchievements(updatedAchievements);
//   };

//   const handleCurricularActivityAdd = () => {
//     setCurricularActivities([...curricularActivities, { title: '', description: '', supportingDocument: null }]);
//   };

//   const handleCurricularActivityDelete = (index) => {
//     const updatedCurricularActivities = [...curricularActivities];
//     updatedCurricularActivities.splice(index, 1);
//     setCurricularActivities(updatedCurricularActivities);
//   };

//   const handleProjectAdd = () => {
//     setProjects([...projects, { title: '', description: '', supportingLink: '' }]);
//   };

//   const handleProjectDelete = (index) => {
//     const updatedProjects = [...projects];
//     updatedProjects.splice(index, 1);
//     setProjects(updatedProjects);
//   };

//   const handleResearchAdd = () => {
//     setResearch([...research, { title: '', description: '', supportingLink: '' }]);
//   };

//   const handleResearchDelete = (index) => {
//     const updatedResearch = [...research];
//     updatedResearch.splice(index, 1);
//     setResearch(updatedResearch);
//   };

//   const handleAchievementInputChange = (index, field, value) => {
//     const updatedAchievements = [...achievements];
//     updatedAchievements[index][field] = value;
//     setAchievements(updatedAchievements);
//   };
  
//   const handleAchievementDocumentUpload = (index, file) => {
//     const updatedAchievements = [...achievements];
//     updatedAchievements[index].document = file;
//     setAchievements(updatedAchievements);
//   };
  
//   const handleCurricularActivityInputChange = (index, field, value) => {
//     const updatedCurricularActivities = [...curricularActivities];
//     updatedCurricularActivities[index][field] = value;
//     setCurricularActivities(updatedCurricularActivities);
//   };
  
//   const handleCurricularActivityDocumentUpload = (index, file) => {
//     const updatedCurricularActivities = [...curricularActivities];
//     updatedCurricularActivities[index].document = file;
//     setCurricularActivities(updatedCurricularActivities);
//   };
  
//   const handleProjectInputChange = (index, field, value) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index][field] = value;
//     setProjects(updatedProjects);
//   };
  
//   const handleProjectDocumentUpload = (index, file) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index].document = file;
//     setProjects(updatedProjects);
//   };
  
//   const handleResearchInputChange = (index, field, value) => {
//     const updatedResearches = [...research];
//     updatedResearches[index][field] = value;
//     setResearch(updatedResearches);
//   };
  
//   const handleResearchDocumentUpload = (index, file) => {
//     const updatedResearches = [...research];
//     updatedResearches[index].document = file;
//     setResearch(updatedResearches);
//   };
  
//   return (
//     <div className="student-page">
//       <div className="profile-section">
//         <div className="profile-picture">
//           <img src={profile.profilePic} alt="Profile" />
//           {isEditingProfile ? (
//             <div className="profile-pic-upload">
//               <input type="file" onChange={handleProfilePicUpload} />
//             </div>
//           ) : (
//             <button onClick={handleEditProfileClick}>Edit</button>
//           )}
//         </div>
//         <div className="profile-details">
//           {isEditingProfile ? (
//             <>
//               <input
//                 type="text"
//                 name="name"
//                 value={profile.name}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={profile.phoneNumber}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleInputChange}
//               />
//               <button onClick={handleSaveProfileClick}>Save</button>
//             </>
//           ) : (
//             <>
//               <h2>{profile.name}</h2>
//               <p>Phone Number: {profile.phoneNumber}</p>
//               <p>Email: {profile.email}</p>
//             </>
//           )}
//           <p>Roll Number: {profile.rollNumber}</p>
//         </div>
//       </div>
//       <div className="achievements-section">
//         <h3>Achievements</h3>
//         {achievements.map((achievement, index) => (
//           <div key={index}>
//             {isEditingAchievements ? (
//               <>
//                 <input
//                   type="text"
//                   value={achievement.title}
//                   onChange={(event) => handleAchievementInputChange(event, index, 'title')}
//                 />
//                 <input
//                   type="text"
//                   value={achievement.description}
//                   onChange={(event) => handleAchievementInputChange(event, index, 'description')}
//                 />
//                 <input
//                   type="file"
//                   onChange={(event) => handleAchievementDocumentUpload(event, index)}
//                 />
//                 <button onClick={() => handleAchievementDelete(index)}>Delete</button>
//               </>
//             ) : (
//               <>
//                 <p>Title: {achievement.title}</p>
//                 <p>Description: {achievement.description}</p>
//                 {achievement.supportingDocument && (
//                   <a href={URL.createObjectURL(achievement.supportingDocument)} target="_blank">
//                     View Document
//                   </a>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//         {isEditingAchievements ? (
//           <button onClick={handleAchievementAdd}>Add Achievement</button>
//         ) : (
//           <button onClick={() => setIsEditingAchievements(true)}>Edit Achievements</button>
//         )}
//       </div>
//       <div className="curricular-activities-section">
//         <h3>Curricular Activities</h3>
//         {curricularActivities.map((activity, index) => (
//           <div key={index}>
//             {isEditingCurricularActivities ? (
//               <>
//                 <input
//                   type="text"
//                   value={activity.title}
//                   onChange={(event) => handleCurricularActivityInputChange(event, index, 'title')}
//                 />
//                 <input
//                   type="text"
//                   value={activity.description}
//                   onChange={(event) =>
//                     handleCurricularActivityInputChange(event, index, 'description')
//                   }
//                 />
//                 <input
//                   type="file"
//                   onChange={(event) =>
//                     handleCurricularActivityDocumentUpload(event, index)
//                   }
//                 />
//                 <button onClick={() => handleCurricularActivityDelete(index)}>Delete</button>
//               </>
//             ) : (
//               <>
//                 <p>Title: {activity.title}</p>
//                 <p>Description: {activity.description}</p>
//                 {activity.supportingDocument && (
//                   <a href={URL.createObjectURL(activity.supportingDocument)} target="_blank">
//                     View Document
//                   </a>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//         {isEditingCurricularActivities ? (
//           <button onClick={handleCurricularActivityAdd}>Add Curricular Activity</button>
//         ) : (
//           <button onClick={() => setIsEditingCurricularActivities(true)}>Edit Curricular Activities</button>
//         )}
//       </div>
//       <div className="projects-section">
//         <h3>Projects</h3>
//         {projects.map((project, index) => (
//           <div key={index}>
//             {isEditingProjects ? (
//               <>
//                 <input
//                   type="text"
//                   value={project.title}
//                   onChange={(event) =>
//                 handleProjectInputChange(event, index, 'title')}
//                 placeholder="Title"
//               />
//               <input
//                 type="text"
//                 value={project.description}
//                 onChange={(event) =>
//                   handleProjectInputChange(event, index, 'description')
//                 }
//                 placeholder="Description"
//               />
//               <input
//                 type="text"
//                 value={project.supportingLink}
//                 onChange={(event) =>
//                   handleProjectInputChange(event, index, 'supportingLink')
//                 }
//                 placeholder="Supporting Link"
//               />
//               <button onClick={() => handleProjectDelete(index)}>Delete</button>
//             </>
//           ) : (
//             <>
//               <p>Title: {project.title}</p>
//               <p>Description: {project.description}</p>
//               <p>Supporting Link: {project.supportingLink}</p>
//             </>
//           )}
//         </div>
//       ))}
//       {isEditingProjects ? (
//         <button onClick={handleProjectAdd}>Add Project</button>
//       ) : (
//         <button onClick={() => setIsEditingProjects(true)}>Edit Projects</button>
//       )}
//     </div>
//     <div className="research-section">
//       <h3>Research</h3>
//       {research.map((item, index) => (
//         <div key={index}>
//           {isEditingResearch ? (
//             <>
//               <input
//                 type="text"
//                 value={item.title}
//                 onChange={(event) => handleResearchInputChange(event, index, 'title')}
//                 placeholder="Title"
//               />
//               <input
//                 type="text"
//                 value={item.description}
//                 onChange={(event) => handleResearchInputChange(event, index, 'description')}
//                 placeholder="Description"
//               />
//               <input
//                 type="text"
//                 value={item.supportingLink}
//                 onChange={(event) => handleResearchInputChange(event, index, 'supportingLink')}
//                 placeholder="Supporting Link"
//               />
//               <button onClick={() => handleResearchDelete(index)}>Delete</button>
//             </>
//           ) : (
//             <>
//               <p>Title: {item.title}</p>
//               <p>Description: {item.description}</p>
//               <p>Supporting Link: {item.supportingLink}</p>
//             </>
//           )}
//         </div>
//       ))}
//       {isEditingResearch ? (
//         <button onClick={handleResearchAdd}>Add Research</button>
//       ) : (
//         <button onClick={() => setIsEditingResearch(true)}>Edit Research</button>
//       )}
//     </div>
//     <div className="gpa-details-section">
//       <h3>GPA Details</h3>
//       {/* Display GPA details from the state */}
//     </div>
//   </div>
// );
// };

// export default Student


// const Student = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [achievements, setAchievements] = useState([
//     { achievement: '', description: '', document: '' },
//   ]);
//   const [curricularActivities, setCurricularActivities] = useState([
//     { activity: '', description: '', document: '' },
//   ]);
//   const [research, setResearch] = useState([
//     { title: '', description: '', link: '' },
//   ]);
//   const [projects, setProjects] = useState([
//     { title: '', description: '', link: '', document: '' },
//   ]);

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = () => {
//     setEditMode(false);
//   };

//   const handleAchievementInputChange = (e, index, field) => {
//     const updatedAchievements = [...achievements];
//     updatedAchievements[index][field] = e.target.value;
//     setAchievements(updatedAchievements);
//   };

//   const handleAchievementDocumentUpload = (e, index) => {
//     const file = e.target.files[0];
//     const updatedAchievements = [...achievements];
//     updatedAchievements[index].document = file;
//     setAchievements(updatedAchievements);
//   };

//   const handleCurricularActivityInputChange = (e, index, field) => {
//     const updatedCurricularActivities = [...curricularActivities];
//     updatedCurricularActivities[index][field] = e.target.value;
//     setCurricularActivities(updatedCurricularActivities);
//   };

//   const handleCurricularActivityDocumentUpload = (e, index) => {
//     const file = e.target.files[0];
//     const updatedCurricularActivities = [...curricularActivities];
//     updatedCurricularActivities[index].document = file;
//     setCurricularActivities(updatedCurricularActivities);
//   };

//   const handleResearchInputChange = (e, index, field) => {
//     const updatedResearch = [...research];
//     updatedResearch[index][field] = e.target.value;
//     setResearch(updatedResearch);
//   };

//   const handleProjectInputChange = (e, index, field) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index][field] = e.target.value;
//     setProjects(updatedProjects);
//   };

//   const handleProjectDocumentUpload = (e, index) => {
//     const file = e.target.files[0];
//     const updatedProjects = [...projects];
//     updatedProjects[index].document = file;
//     setProjects(updatedProjects);
//   };

//   const handleProjectLinkChange = (e, index) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index].link = e.target.value;
//     setProjects(updatedProjects);
//   };

//   return (
//     <div className="student-page">
//       <div className="profile-section">
//         <div className="profile-picture">
//           <img src="profile-image.jpg" alt="Profile" />
//           {editMode && (
//             <div className="profile-pic-upload">
//               <input type="file" />
//             </div>
//           )}
//         </div>
//         <div className="profile-details">
//           <input type="text" value="John Doe" readOnly={!editMode} />
//           <input type="text" value="123-456-7890" readOnly={!editMode} />
//           <input type="text" value="johndoe@example.com" readOnly={!editMode} />
//           <p>Roll Number: 12345</p>
//           <div>
//             {!editMode ? (
//               <button onClick={handleEdit}>Edit</button>
//             ) : (
//               <button onClick={handleSave}>Save</button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="achievements-section">
//         <h3>Achievements</h3>
//         {achievements.map((achievement, index) => (
//           <div key={index}>
//             {editMode ? (
//               <>
//                 <input
//                   type="text"
//                   value={achievement.achievement}
//                   onChange={(e) =>
//                     handleAchievementInputChange(e, index, 'achievement')
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={achievement.description}
//                   onChange={(e) =>
//                     handleAchievementInputChange(e, index, 'description')
//                   }
//                 />
//                 <input
//                   type="file"
//                   onChange={(e) =>
//                     handleAchievementDocumentUpload(e, index)
//                   }
//                 />
//               </>
//             ) : (
//               <>
//                 <p>Achievement: {achievement.achievement}</p>
//                 <p>Description: {achievement.description}</p>
//                 <p>Document: {achievement.document.name}</p>
//               </>
//             )}
//             <div>
//               <button onClick={handleEdit}>Edit</button>
//               {editMode && <button>Save</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="curricular-activities-section">
//         <h3>Curricular Activities</h3>
//         {curricularActivities.map((activity, index) => (
//           <div key={index}>
//             {editMode ? (
//               <>
//                 <input
//                   type="text"
//                   value={activity.activity}
//                   onChange={(e) =>
//                     handleCurricularActivityInputChange(e, index, 'activity')
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={activity.description}
//                   onChange={(e) =>
//                     handleCurricularActivityInputChange(e, index, 'description')
//                   }
//                 />
//                 <input
//                   type="file"
//                   onChange={(e) =>
//                     handleCurricularActivityDocumentUpload(e, index)
//                   }
//                 />
//               </>
//             ) : (
//               <>
//                 <p>Activity: {activity.activity}</p>
//                 <p>Description: {activity.description}</p>
//                 <p>Document: {activity.document.name}</p>
//               </>
//             )}
//             <div>
//               <button onClick={handleEdit}>Edit</button>
//               {editMode && <button>Save</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="research-section">
//         <h3>Research</h3>
//         {research.map((item, index) => (
//           <div key={index}>
//             {editMode ? (
//               <>
//                 <input
//                   type="text"
//                   value={item.title}
//                   onChange={(e) => handleResearchInputChange(e, index, 'title')}
//                 />
//                 <input
//                   type="text"
//                   value={item.description}
//                   onChange={(e) =>
//                     handleResearchInputChange(e, index, 'description')
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={item.link}
//                   onChange={(e) => handleResearchInputChange(e, index, 'link')}
//                 />
//               </>
//             ) : (
//               <>
//                 <p>Title: {item.title}</p>
//                 <p>Description: {item.description}</p>
//                 <p>Link: {item.link}</p>
//               </>
//             )}
//             <div>
//               <button onClick={handleEdit}>Edit</button>
//               {editMode && <button>Save</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="projects-section">
//         <h3>Projects</h3>
//         {projects.map((project, index) => (
//           <div key={index}>
//             {editMode ? (
//               <>
//                 <input
//                   type="text"
//                   value={project.title}
//                   onChange={(e) =>
//                     handleProjectInputChange(e, index, 'title')
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={project.description}
//                   onChange={(e) =>
//                     handleProjectInputChange(e, index, 'description')
//                   }
//                 />
//                 <input
//                   type="text"
//                   value={project.link}
//                   onChange={(e) => handleProjectLinkChange(e, index)}
//                 />
//                 <input
//                   type="file"
//                   onChange={(e) => handleProjectDocumentUpload(e, index)}
//                 />
//               </>
//             ) : (
//               <>
//                 <p>Title: {project.title}</p>
//                 <p>Description: {project.description}</p>
//                 <p>Link: {project.link}</p>
//                 <p>Document: {project.document.name}</p>
//               </>
//             )}
//             <div>
//               <button onClick={handleEdit}>Edit</button>
//               {editMode && <button>Save</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="gpa-details-section">
//         <h3>GPA Details</h3>
//         {/* GPA table goes here */}
//       </div>
//     </div>
//   );
// };

// export default Student;
