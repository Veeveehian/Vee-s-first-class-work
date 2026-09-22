import React from 'react'
import confusion from "../../assets/Confusion.jpg"
import "./About.css"

const About = () => {
  return (
    <div>
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
                    <img src={confusion} alt='fgjdfjdy' />
                  </div>
                 </section>
    </div>
  )
}

export default About