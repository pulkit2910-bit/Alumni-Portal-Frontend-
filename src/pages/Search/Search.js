import React, { useState } from 'react';
import './Search.css'; // Import CSS file for styling
import Navbar from '../../components/Navbar/Navbar';

function SearchPage() {
  const profiles = [
    // Array of profile objects
    { id: 1, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 2, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 3, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 4, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 5, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 6, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 7, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 8, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 9, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 10, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 11, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 12, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 13, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 14, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 15, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 16, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 17, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 18, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 19, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 20, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 21, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 22, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
    { id: 23, name: "John Doe", company: "ABC Corp", batch: "2022", degree: "Computer Science", location: "New York" },
    { id: 24, name: "Jane Smith", company: "XYZ Inc", batch: "2021", degree: "Electrical Engineering", location: "San Francisco" },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(profiles);
  const [filters, setFilters] = useState({
    company: '',
    batch: '',
    degree: '',
    location: '',
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

  const handleSearch = () => {
    const filteredResults = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      profile.company.toLowerCase().includes(filters.company.toLowerCase()) &&
      profile.batch.toLowerCase().includes(filters.batch.toLowerCase()) &&
      profile.degree.toLowerCase().includes(filters.degree.toLowerCase()) &&
      profile.location.toLowerCase().includes(filters.location.toLowerCase())
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
    <Navbar />
    <div className="search-page">
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
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" value={filters.company} onChange={handleFilterChange} />

        <label htmlFor="batch">Batch:</label>
        <input type="text" id="batch" name="batch" value={filters.batch} onChange={handleFilterChange} />

        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" value={filters.degree} onChange={handleFilterChange} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={filters.location} onChange={handleFilterChange} />

        <button onClick={handleSearch}>Apply</button>
      </div>
      )}

      <div className="results-container">
        {sortedResults.map((profile) => (
          <div key={profile.id} className="profile-card">
            <h3>{profile.name}</h3>
            <p>Company: {profile.company}</p>
            <p>Batch: {profile.batch}</p>
            <p>Degree: {profile.degree}</p>
            <p>Location: {profile.location}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default SearchPage;