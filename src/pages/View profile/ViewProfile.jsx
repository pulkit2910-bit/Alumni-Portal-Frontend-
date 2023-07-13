import React, { useContext, useEffect, useState } from 'react'
import './ViewProfile.css'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import Vpleft from '../../components/ViewProfile/Vpleft/Vpleft'
import Vpright from '../../components/ViewProfile/Vpright/Vpright'
import Vpcenter from '../../components/ViewProfile/Vpcenter/Vpcenter'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import StudentVPLeft from '../../components/Student/StudentVPLeft/StudentVPLeft';
import StudentVPRight from '../../components/Student/StudentVPRight/StudentVPRight';
import StudentVPCenter from '../../components/Student/StudentVPCenter/StudentVPCenter';

const ViewProfile = () => {
  const { user : currUser } = useContext(AuthContext);
  const { userID } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userID=${userID}`);
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
        {currUser?.role === "admin" ? <AdminNavbar /> : <Navbar />}
      </div>
      {user?.role === "alumni"
      ? 
      (<div className='profile-middle'>
        <Vpleft user={user} />
        <Vpcenter user={user} />
        <Vpright user={user} />
      </div>)
      :
      (<div className='profile-middle'>
        <StudentVPLeft user={user} />
        <StudentVPCenter user={user} />
        <StudentVPRight user={user} />
      </div>)
      }
    </div>
  )
}

export default ViewProfile;
