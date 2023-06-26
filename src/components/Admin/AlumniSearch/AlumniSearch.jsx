import React from 'react';
import "./AlumniSearch.css"
import SearchPage from '../../../pages/Search/Search';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function AlumniSearch() {
  return (
    <div>
    <AdminNavbar />
    <div className='admin-search-page'>
     <SearchPage isAdmin={true} />
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
    </div>
  )
}

export default AlumniSearch