import React from 'react'

const App = () => {
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
        {/* <!-- HERO SECTION --> */}
         <section className="hero">
          <div className="overlay">
            <div className="hero-content">
              <h1>Welcome to my website</h1>
              <p>Learn fullstack development, UI/UX, Graphic design and any other digital skills.</p>
              <button className="btn">Get Started</button>
              {/* <!-- <a href="#" className="btn">Get Started< /a> --> */}
            </div>
          </div>
        </section>
       
        {/* <!-- ABOUT SECTION --> */}
         <section className="about">
          <div className="about-text">
            <h3>About Me</h3>
            <h2>Building Skills <br/> Building Knowledge</h2>
            <p>I am a passionate web developer and designer with a love for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and various frameworks.</p>
            <ul>
              <li>&#10004; Practical hands on learning</li>
              <li>&#10004; Expert Instructor</li>
              <li>&#10004; Flexible Learning Schedule</li>
            </ul>
            <a href="./classNameES.html" className="btn">Explore classNamees</a>
          </div>
          <div className="about-image">
            <img src="../../Downloads/Confusion.jpg" alt="Image" />
          </div>
         </section>
          {/* <!-- TESTIMONIAL CARD --> */}
         <section id="testiomials">
          <h4>TESTIMONIES</h4>
          <h2>Feedbacks From Our Students</h2>
          <div className="testiomial-continer">
          <div className="card">
            <img src="../../Downloads/Student1.jpg" alt="Student One"/>
            <h3>John Daniel</h3>
            <p>"This academy completely changed my career. I learned web development from scratch and got my first tech job."</p>
          </div>
          <div className="card">
            <img src="../../Downloads/Student2.jpg" alt="Student Two"/>
            <h3>Grace Michael</h3>
            <p>"The classNamees were practical and easy to follow. Every lesson helped me become more confident."</p>
          </div>
          <div className="card">
            <img src="../../Downloads/Student4.jpg" alt="Student Three"/>
            <h3>David Smith</h3>
            <p>"One of the best learning experiences I've ever had. The instructors were amazing and supportive."</p>
          </div>
          </div>
         </section>
         {/* <!-- CALL TO ACTION --> */}
          <section className="cta">
            <div className="cta-content">
              <h2>Ready To Start Your Learning Journey?</h2>
              <p>Join Us Today And Start Learning Practiclal Digital Skills That Can Transform Your Future.</p>
              <a href="#" className="cta-button">Get Started</a>
            </div>
          </section>

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
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>
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

           {/* <!-- Internal Script -->
           <!-- <script>
            alert("HELLO I AM VEE")
           </script> -->
    
           <!-- EXTERNAL SCRIPT -->
           <script src="./className3.javascript.js"> */}

           {/* </script> */}

    </div>
  )
}

export default App
