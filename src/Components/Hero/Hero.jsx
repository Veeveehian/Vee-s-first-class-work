import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
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
        
    </div>
  )
}

export default Hero