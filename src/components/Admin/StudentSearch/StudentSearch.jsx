import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Profilepicture from "../../../img/img1.png";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import './StudentSearch.css'

const StudentSearch = () => {
  const profiles = [
    // Array of profile objects
    { id: 1, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 2, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 3, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 4, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 5, name: "John Doe", rollNumber: "MTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 6, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 7, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 8, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 9, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 10, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 11, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 12, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 13, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },  
    { id: 14, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 15, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 16, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 17, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 18, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 19, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 20, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 21, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 22, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
    { id: 23, name: "John Doe", rollNumber: "BTECH/10009/20", GPA: "9.2", batch: "2022", degree: "BTECH", backlog: "3" },
    { id: 24, name: "Jane Smith", rollNumber: "MTECH/10009/20", GPA: "8.4", batch: "2021", degree: "MTECH", backlog: "1" },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(profiles);
  const [filters, setFilters] = useState({
    GPA: '',
    batch: '',
    degree: '',
    backlog: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const searchGreaterThan = (number, target) => {
    
    if (Number(number) >= Number(target)) return true;
    else return false;
  };

  const handleSearch = () => {
    const filteredResults = profiles.filter((profile) =>
      (profile.name.toLowerCase().includes(searchQuery.toLowerCase()) || profile.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())) &&
      searchGreaterThan(profile.GPA , filters.GPA) &&
      profile.batch.toLowerCase().includes(filters.batch.toLowerCase()) &&
      profile.degree.toLowerCase().includes(filters.degree.toLowerCase()) &&
      searchGreaterThan(profile.backlog , filters.backlog)
    );
    setSearchResults(filteredResults);
  };

  const sortedResults = searchResults.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);
    return dateB - dateA;
  });

  return (
    <>
    <AdminNavbar />
    <div className="student-search-page">
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
          className={`filter-toggle ${showFilters ? 'active' : ''}`}
          onClick={handleToggleFilters}
        >
          <span className="filter-icon">Filter</span>
          <span className="arrow-icon">▲</span>
        </button>
      </div>
      {showFilters && (
      <div className="filters-container">
        <label htmlFor="GPA">GPA:</label>
        <input type="number" id="GPA" name="GPA" value={filters.GPA} onChange={handleFilterChange} />

        <label htmlFor="batch">Batch:</label>
        <input type="text" id="batch" name="batch" value={filters.batch} onChange={handleFilterChange} />

        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" value={filters.degree} onChange={handleFilterChange} />

        <label htmlFor="backlog">Backlog:</label>
        <input type="number" id="backlog" name="backlog" value={filters.backlog} onChange={handleFilterChange} />

        <button onClick={handleSearch}>Apply</button>
      </div>
      )}

      <div className="results-container">
        {sortedResults.map((profile) => (
          <div key={profile.id} className="profile-card">
      <div className='upperprofilecard'>
      <div className="profile-picture">
        <img src={Profilepicture} alt="Profile" />
      </div>
      <hr />
      <div className="profile-details">
        <h2 className="profile-name">{profile.name}</h2>
        <h4 className="profile-rollNumber">{profile.rollNumber}</h4>
        <h5 className="profile-GPA">{profile.GPA} GPA</h5>
        <h5 className="profile-backlog">{profile.backlog} Active Baclogs</h5>
      </div>
      </div>
      <div>
        <h5 class="profile-degree-batch"> {profile.degree} | {profile.batch} </h5>
      </div>
          </div>
        ))}
      </div>
    </div>
        <footer className="AdminFooter">
          {/* insert onclick backend codes here */}
          <button>
            Download  &nbsp; <AiOutlineDownload/>
          </button>

          <button>
            Mail all  &nbsp; <AiOutlineMail/>
          </button> 
        </footer>
    </>
  );
}

export default StudentSearch



