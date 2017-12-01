import React from 'react'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <div className="header">
      <h1>Sexy Metlink App</h1>
      <button><Link to="/">Going to town</Link></button>
        <button><Link to="/test">Going home</Link></button>
    </div>
  )
}

export default Header
