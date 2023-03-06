import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <div className="menu-toggle">
            <div className="toggle-size"></div>
            <div className="toggle-size"></div>
            <div className="toggle-size"></div>
        </div>
        <div className="nav-title">Movie DB</div>
        <div className="nav-page-title">
          <Link className="navlink" to="/new">New Release</Link>
          <Link className="navlink" to="/hot">What's Hot</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar