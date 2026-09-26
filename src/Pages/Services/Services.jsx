import React from 'react'
import Agenda1 from '../../assets/Agenda1.jpg'
import Agenda2 from '../../assets/Agenda2.jpg'
import Agenda3 from '../../assets/Agenda3.jpg'
import Agenda4 from '../../assets/Agenda4.jpg'
import Agenda5 from '../../assets/Agenda5.jpg'
import './Services.css'
import NavBar from '../../Components/NavBar/NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLightbulb,
  faPen,
  faHouse,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Mission from '../../assets/Mission.jpg'
import Vision from '../../assets/Vision.jpg'
import Footer from '../../Components/Footer/Footer'

const Services = () => {
  return (
    <div>
      <NavBar/>
        <section className='agendaSection'>
        <h1>Our Services</h1>
        <div className='agendaContainer'>
        <div className='agenda'>
          <FontAwesomeIcon className='icon' icon={faLightbulb} />
          <h3>Quality Education</h3>
           <img src={Agenda1} alt="alt" />
          <p>To provide students with quality, accessibile, and practical education that prepared them for the future.</p>
        </div>
        <div className='agenda'>
          <FontAwesomeIcon className='icon' icon={faHeart} />
          <h3>Student Development</h3>
           <img src={Agenda2} alt="alt" />
          <p>To encourage students to develop their academic, creative, leadership, and interpersonal skills.</p>
        </div>
        <div className='agenda'>
          <FontAwesomeIcon className='icon' icon={faPen} />
          <h3>Innovation & Technology</h3>
           <img src={Agenda3} alt="alt" />
          <p>To embrace modern technology and innovative methods of learning to make education more engaging and effective.</p>
        </div>
        <div className='agenda'>
          <FontAwesomeIcon className='icon' icon={faHouse} />
          <h3>Character & Leadership</h3>
           <img src={Agenda4} alt="alt" />
          <p>To build responsible, condifent, and innovative method of learning to make education more engaging and effective.</p>
        </div>
        <div className='agenda'>
        <FontAwesomeIcon className='icon' icon={faBook} />
          <h3>Community & Excellence</h3>
           <img src={Agenda5} alt="alt" />
          <p>To create an inclusive learning community where students and staff work together toward continous growth and excellence.</p>
        </div>
        </div>
      </section>
      <section className='missionVision'>
        <div className='mission'>
          <div >
           <img className='missionImg' src={Mission} alt="alt" /> 
          </div>
          <div className='missionNote'>
          <h1>The Mission</h1>
          <p>Our mission is to provide quality, accesssible, and innovative<br/>
          education in a supportive environment where every student is encouraged to<br/>
          learn, grow, discover their potential, and prepare confidently for the future.</p>
        </div>
        </div>
      </section>
      <section className='missionVision'>
        <div className='mission'>
          <div className='missionNote'>
          <h1>The Vision</h1>
          <p>Our vision is to become a leading institution that inspires excellence,<br/>
          develop confidence and responsible individuals, and equips students with the<br/>
          knowledge, skills, and values needed to make a positive impact in the world.</p>
        </div>
          <div >
           <img className='missionImg' src={Vision} alt="alt" /> 
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Services