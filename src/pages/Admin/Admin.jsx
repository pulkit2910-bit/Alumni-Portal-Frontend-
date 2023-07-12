import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar'
import LeftSide from '../../components/Home/LeftSide/LeftSide'
import FeedSection from '../../components/Home/FeedSection/FeedSection'
import RightSide from '../../components/Home/RightSide/RightSide'

const Admin = () => {
  return (<>
    <AdminNavbar />
    <div className='home-middle'>
      <LeftSide />
      <FeedSection />
      <RightSide />
    </div>
    </>
  )
}

export default Admin