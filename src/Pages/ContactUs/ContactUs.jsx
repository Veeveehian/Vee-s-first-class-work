import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';
import NavBar from '../../Components/NavBar/NavBar';

const ContactUs = () => {
  return (
    <div>
      <NavBar/>
        <section className='contactContainer'>
          <div className='contactContent'>
            <div className='contactUs'>
              <h1>CONTACT US</h1>
              <p>We would love to speak with you.
                <br/>Feel free to reach out using the details below.</p>
                <button>EXPLORE THIS PAGE</button>
                </div>

                <div className='Address'>
                  <h2>Address</h2>
                  <p>Plot 222 Cadastral Zone C-OO, Research & Institution Area
                  <br/>Jabi Airport bypass, Abuja FCT, Nigeria.</p>
                </div>
                
                  <div className='GIT'>
                    <h2>Get In Touch</h2>
                    <p className='p1'><FontAwesomeIcon icon={faEnvelope}/>    viviandyke0@gmail.com </p>
                    <p className='p2'><FontAwesomeIcon icon={faPhone}/>    07061521902 </p>
                  </div>
          
          <div className='Icons'>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          </div>

          <div className='formContainer'>
            <form className='form'>
              <input className='name' type="text" placeholder="Your Name" required /><br/>
              <input className='email' type="email" placeholder="example@yahoo.com" required /><br/>
              <input className='tel' type="tel" placeholder="0800 123 4567" required /><br/>
              <input className='subject' type="text" placeholder="Subject" required /><br/>
              <textarea className='enquiry' placeholder='Enter Your Enquiry' required></textarea><br/>
              <button>Submit</button>
            </form>
          </div>
        </section>
    </div>
  )
}

export default ContactUs