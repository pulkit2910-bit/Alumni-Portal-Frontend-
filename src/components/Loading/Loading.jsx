import React from 'react'
import "./Loading.css"
import Loader from "../../img/Loading.gif"

const Loading = () => {
  return (
    <div className='Loading'>
      <img src={Loader} alt="" />  
    </div>
  )
}

export default Loading