import React from 'react'
// import card1 from './assets/Student1.jpg'
// import card2 from './assets/Student2.jpg'
// import card3 from './assets/Student3.jpg'
// import confusion from './assets/Confusion.jpg'
// import NavBar from "./Components/NavBar/NavBar"
// import Hero from "./Components/Hero/Hero"
// import About from "./Components/About/About"
// import Testimonial from './Components/Testimonial/Testimonial'
// import CallToAction from './Components/CallToAction/CallToAction'
// import Footer from './Components/Footer/Footer'
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import Services from './Pages/Services/Services'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/ContactUs" element={<ContactUs/> } />
      <Route path="/AboutUs" element={<AboutUs/> } />
      <Route path="/" element={<LandingPage/> } />
      <Route path="/Services" element={<Services/> } />
      </Routes> 
       
        {/* <!-- ABOUT SECTION --> */}
        
      
        

          

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
