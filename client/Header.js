import React from 'react'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <div className="header">
      <h1>This is the header</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
    </div>
  )
}

export default Header
