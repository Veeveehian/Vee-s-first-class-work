import React from 'react'
import Founder from '../../assets/Founder.png'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <NavBar/>
      <section className='AboutHero'>
        <div className='Hero'>
          <h1>ABOUT US</h1>
        </div>
      </section>
      <section className='AboutUs'>
        <div className='About'>
        <div className='AboutImg'>
          <img src={Founder} alt="alt" />
        </div>

        <div className='AboutFounder'>
          <h1>The Designer</h1>
          <p className='bio'>This website is more than just a project to me. it is the beginning<br/>
             of my journey into web development. When I started building my first <br/>
             website, I honestly didn't know how everything would come together. <br/>
             I started with the basics of HTML and CSS, learning how to structure <br/>
             a page, style it, create forms, add buttons, and make everything look <br/>
             the way I imagined. Along the way, I encountered plenty of challenges. <br/>
             Some things worked, while others completely refused to cooperate. <br/>
             But every error, every mistake, and every time I had to start over <br/>
             taught me something new. What makes this journey interesting is seeing <br/>
             how something that started as just lines of code can gradually become <br/>
             an actual website that I can interact with and be proud of. I'm still <br/>
             learning, still experimenting, and still discovering new things every <br/>
             day. This first website may not be perfect, but it represents where I <br/>
             started — and how far I'm willing to go. And this is only the beginning.</p>
             <h3>Dike O. Vivian</h3>
             <p>viviandyke0@gmail.com</p>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutUs