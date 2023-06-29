import React from 'react'
import { Link } from 'react-router-dom'

const UnAuth = () => {
  return (
    <div>
      <h1>You are not authorized to access this route</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default UnAuth
