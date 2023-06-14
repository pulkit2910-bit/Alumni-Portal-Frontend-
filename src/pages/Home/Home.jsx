import React, { useContext } from 'react'
import './Home.css'
import FeedSection from '../../components/Home/FeedSection/FeedSection'
import LeftSide from '../../components/Home/LeftSide/LeftSide'
import RightSide from '../../components/Home/RightSide/RightSide'
import Navbar from '../../components/Navbar/Navbar'
import { AuthContext } from '../../Context/AuthContext/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='Home'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='home-middle'>
        <LeftSide />
        <FeedSection />
        <RightSide />
      </div>
    </div>
  )
}

export default Home
