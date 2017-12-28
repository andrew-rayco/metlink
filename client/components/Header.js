import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img src="/img/bus-icon.svg" alt="bus icon"/>
      </Link>
      <Link to="/">
        <h1>Sexy Met<span>link</span> App</h1>
      </Link>
    </div>
  )
}

export default Header
