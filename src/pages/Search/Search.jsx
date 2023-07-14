import React, { useEffect, useState } from "react";
import "./Search.css"; // Import CSS file for styling
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";

import { AiOutlineDownload } from "react-icons/ai";
import Loading from "../../components/Loading/Loading";

function SearchPage({isAdmin}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    company: "",
    batch: "",
    degree: "",
    location: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get(`/alumni/search?page=${page}`);
      setUsers(res.data);
      setSearchResults(res.data);
      setLoading(false);
    };
    fetchAllUsers();
  }, [page]);

  const handleClick = (profile) => {
    if (isAdmin) navigate(`/admin/view-profile/${profile._id}`);
    else navigate(`/alumni/view-profile/${profile._id}`);
  }

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const newRes = users.filter((res) =>
      res.name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    setSearchResults(newRes);
    // console.log(searchResults)
  };

  const handleApplyFilter = () => {
    const filteredResults = users.filter((res) => {
      const isMatchCompany = filters.company === "" || (res.company !== "" && res.company?.toLowerCase().includes(filters.company.toLowerCase()));
      const isMatchBatch = filters.batch === "" || (res.batch !== "" && res.batch?.toLowerCase().includes(filters.batch.toLowerCase()));
      const isMatchDegree = filters.degree === "" || (res.degree !== "" && res.degree?.toLowerCase().includes(filters.degree.toLowerCase()));
      const isMatchLocation = filters.location === "" || (res.location !== "" && res.location?.toLowerCase().includes(filters.location.toLowerCase()));

      return isMatchCompany && isMatchBatch && isMatchDegree && isMatchLocation;
    });
    setSearchResults(filteredResults);
  };

  // Download User basic details
  const downloadCSV = () => {
    const data = searchResults;
    const filteredData = data.map((
      { _id, name, rollNumber, role, email, altEmail, phoneNo, altPhoneNo, address, batch, degree, location, company, title, dob }) => ({
        _id, name, rollNumber, role, email, altEmail, phoneNo, altPhoneNo, address, batch, degree, location, company, title, dob
      }))

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  }

  // Download User education details
  const downloadEducation = () => {
    // Excel workbook
    const workbook = XLSX.utils.book_new();
    const users = searchResults;
    // Excel sheet
    const sheetName = 'Education';
    const sheetData = [['Name', 'Roll Number', 'Institution', 'Degree', 'Start Date', 'End Date']];
    
    users.forEach((user) => {
      const { name, rollNumber, education } = user;
      education.forEach((exp) => {
        const rowData = [name, rollNumber, exp.institution, exp.degree, exp.startDate, exp.endDate];
        sheetData.push(rowData);
      });
    });
  
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
    // Export the Excel file
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(
      new Blob([s2ab(excelFile)], { type: 'application/octet-stream' })
    );
    downloadLink.download = 'user_education.xlsx';
    downloadLink.click();
  };

  // Download User experiences details
  const downloadExperiences = () => {
    // Excel workbook
    const workbook = XLSX.utils.book_new();
    const users = searchResults;
    // Excel sheet
    const sheetName = 'Experiences';
    const sheetData = [['Name', 'Roll Number', 'Company', 'Position', 'Start Date', 'End Date']];
    
    users.forEach((user) => {
      const { name, rollNumber, experience } = user;
      experience.forEach((exp) => {
        const rowData = [name, rollNumber, exp.company, exp.position, exp.startDate, exp.endDate];
        sheetData.push(rowData);
      });
    });
  
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
    // Export the Excel file
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(
      new Blob([s2ab(excelFile)], { type: 'application/octet-stream' })
    );
    downloadLink.download = 'user_experiences.xlsx';
    downloadLink.click();
  };

  // Download User achievements details
  const downloadAchievements = () => {
    // Excel workbook
    const workbook = XLSX.utils.book_new();
    const users = searchResults;
    // Excel sheet
    const sheetName = 'Achievements';
    const sheetData = [['Name', 'Roll Number', 'Achievements']];
    
    users.forEach((user) => {
      const { name, rollNumber, achievements } = user;
      achievements.forEach((achievement) => {
        const rowData = [name, rollNumber, achievement];
        sheetData.push(rowData);
      });
    });
  
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
    // Export the Excel file
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(
      new Blob([s2ab(excelFile)], { type: 'application/octet-stream' })
    );
    downloadLink.download = 'user_achievements.xlsx';
    downloadLink.click();
  };
  
  // Utility function to convert s to arrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  if (loading) {
    return <><Loading /></>;
  }

  return (
    <>
      {!isAdmin && <Navbar />}
      <div className={isAdmin? "search-page search-page-admin-true" : "search-page"}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search profiles"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            onKeyUp={handleSearch}
          />
          <button onClick={handleSearch}> &#x1F50D; Search</button>
          <button
            className={`filter-toggle ${showFilters ? "active" : ""}`}
            onClick={handleToggleFilters}
          >
            <span className="filter-icon">Filter</span>
            <span className="arrow-icon">▲</span>
          </button>
        </div>
        {showFilters && (
          <div className="filters-container">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={filters.company}
              onChange={handleFilterChange}
            />

            <label htmlFor="batch">Batch:</label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={filters.batch}
              onChange={handleFilterChange}
            />

            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={filters.degree}
              onChange={handleFilterChange}
            />

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            />

            <button onClick={handleApplyFilter}>Apply</button>
          </div>
        )}

        <div className="results-container">
          {searchResults.length > 0 ? searchResults.map((profile) => (
            <div key={profile.id} className="profile-card" onClick={() => handleClick(profile)}>
              <div className="upperprofilecard">
                <div className="profile-picture">
                  <img src={profile.avatar.url} alt="Profile" />
                </div>
                <hr />
                <div className="profile-details">
                  <h2 className="profile-name">{profile.name}</h2>
                  <h4 className="profile-title">{profile.title}</h4>
                  <h5 className="profile-company">{profile.company}</h5>
                  <h5 className="profile-location">{profile.location}</h5>
                </div>
              </div>
              <div>
                <h5 className="profile-degree-batch">
                  {profile.degree} | {profile.batch}
                </h5>
              </div>
            </div>
          )) : "No Users Found"}
        </div>

        {isAdmin && <footer className="AdminFooter">
          {/* insert onclick backend codes here */}
          <button onClick={() => downloadCSV()}>
            Download  &nbsp; <AiOutlineDownload/>
          </button>

          <button onClick={() => downloadEducation()}>
            Download Education &nbsp; <AiOutlineDownload/>
          </button>

          <button onClick={() => downloadAchievements()}>
            Download Achievements &nbsp; <AiOutlineDownload/>
          </button>

          <button onClick={() => downloadExperiences()}>
            Download Experiences &nbsp; <AiOutlineDownload/>
          </button>

          {/* <button>
            Mail all  &nbsp; <AiOutlineMail/>
          </button>  */}
        </footer>}
      </div>
    </>
  );
}

export default SearchPage;
