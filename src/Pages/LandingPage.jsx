import React from 'react'
import NavBar from "../Components/NavBar/NavBar"
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Testimonial from '../Components/Testimonial/Testimonial'
import CallToAction from '../Components/CallToAction/CallToAction'
import Footer from '../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
           <Hero/> 
           <About/>  
           <Testimonial/>  
           <CallToAction/> 
           <Footer/>  
    </div>
  )
}

export default LandingPage