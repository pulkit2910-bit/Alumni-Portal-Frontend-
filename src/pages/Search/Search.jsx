import React, { useEffect, useState } from "react";
import "./Search.css"; // Import CSS file for styling
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";

import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

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
    navigate(`/view-profile/${profile._id}`);
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
    console.log(searchResults)
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

  // Alumni
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!isAdmin && <Navbar />}
      <div className="search-page">
        <div className={isAdmin? "search-container" : "search-container search-container-admin-true"}>
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

          <button>
            Mail all  &nbsp; <AiOutlineMail/>
          </button> 
        </footer>}
      </div>
    </>
  );
}

export default SearchPage;
