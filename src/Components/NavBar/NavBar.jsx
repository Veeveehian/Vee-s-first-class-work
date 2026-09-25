import React from 'react'
import "./NavBar.css";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
        <div>
        {/* <!-- NAV BAR --> */}
         <nav className="navbar">
          <div className="logo">Mysite</div>
          <ul className="nav-links">
            <li> <Link to="/"> Home </Link>  </li>
            <li> <Link to="/AboutUs"> About </Link></li>
            <li> <Link to="/Services"> Services </Link></li>
            <li> <Link to="/ContactUs"> Contact </Link></li>
          </ul>
         </nav>
    </div>
  )
}

export default NavBar