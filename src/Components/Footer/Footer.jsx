import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
        {/* <!-- FOOTER --> */}
           <footer className="footer">
            <div className="footer-container">

              {/* <!-- ABOUT --> */}
               <div className="footer-box">
                <h2>Our Digital Skills Academy</h2>
                <p>Empwering stdents with practical digital skills for a better future</p>
               </div>

              {/* <!-- QUICK LINKS --> */}
               <div className="footer-box">
                <h3>Quick Links</h3>
                 <Link to="/"> Home </Link> 
                <Link to="/AboutUs"> About </Link>
                <Link to="/Services"> Services </Link>
                <Link to="/ContactUs"> Contact </Link>
               </div>

               {/* <!-- CONTACT --> */}
                  <div className="footer-box">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +234 800 000 0000</p>
                    <p>Owerri, Imo State</p>
                  </div>
                </div>
            {/* <!-- COPYRIGHT --> */}
             <div className="copyright">
              <p>&copy; 2026 Our Digital Skills Academy. All Rights Reserved.</p>
             </div>
           </footer>
    </div>
  )
}

export default Footer