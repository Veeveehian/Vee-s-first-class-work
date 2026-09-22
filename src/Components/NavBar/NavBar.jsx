import React from 'react'
import "./NavBar.css";

const NavBar = () => {
  return (
        <div>
        {/* <!-- NAV BAR --> */}
         <nav className="navbar">
          <div className="logo">Mysite</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
         </nav>
    </div>
  )
}

export default NavBar