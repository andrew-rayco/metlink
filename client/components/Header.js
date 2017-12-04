import React from 'react'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <div className="header">
      <img src="/img/bus-icon.svg" alt="bus icon"/>
      <h1>Sexy Met<span>link</span> App</h1>
    </div>
  )
}

export default Header
