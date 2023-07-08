import React, { useEffect, useState } from 'react'
import './ViewProfile.css'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import Vpleft from '../../components/ViewProfile/Vpleft/Vpleft'
import Vpright from '../../components/ViewProfile/Vpright/Vpright'
import Vpcenter from '../../components/ViewProfile/Vpcenter/Vpcenter'
import { useParams } from 'react-router-dom'

const ViewProfile = () => {
  const { userID } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/alumni?userID=${userID}`);
      // console.log(res);
      setUser(res.data);
      setLoading(false);
    }
    fetchUser();
  }, [userID]);

  if (loading) {
    return "Loading....";
  }

  return (
    <div className='ViewProfile'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='profile-middle'>
        <Vpleft user={user} />
        <Vpcenter user={user} />
        <Vpright user={user} />
      </div>
    </div>
  )
}

export default ViewProfile;
