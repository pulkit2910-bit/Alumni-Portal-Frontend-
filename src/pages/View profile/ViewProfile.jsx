import React from 'react'
import './ViewProfile.css'
import Navbar from '../../components/Navbar/Navbar'
import Vpleft from '../../components/ViewProfile/Vpleft/Vpleft'
import Vpright from '../../components/ViewProfile/Vpright/Vpright'
import Vpcenter from '../../components/ViewProfile/Vpcenter/Vpcenter'

const ViewProfile = () => {
  return (
    <div className='ViewProfile'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='profile-middle'>
        <Vpleft/>
        <Vpcenter/>
        <Vpright/>
      </div>
    </div>
  )
}

export default ViewProfile;
