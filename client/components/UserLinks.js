import React from 'react'
import { Link } from 'react-router-dom'

const UserLinks = () => {
  return (
    <div className="user-links">
      <Link to="/edit">Manage stops</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  )
}

export default UserLinks
