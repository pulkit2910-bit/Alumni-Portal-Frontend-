import React from "react";
import "./AlumniSearch.css";
import SearchPage from "../../../pages/Search/Search";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

function AlumniSearch() {
  return (
    <div>
      <AdminNavbar />
      <div className="admin-search-page">
        <SearchPage isAdmin={true} />
      </div>
    </div>
  );
}

export default AlumniSearch;
