import React from 'react'
import card1 from '../../assets/Student1.jpg'
import card2 from '../../assets/Student2.jpg'
import card3 from '../../assets/Student3.jpg'
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div>
         {/* <!-- TESTIMONIAL CARD --> */}
                 <section id="testiomials">
                  <h4>TESTIMONIES</h4>
                  <h2>Feedbacks From Our Students</h2>
                  <div className="testiomial-continer">
                  <div className="card">
                    <img src={card1} alt="alt" />
                    <h3>John Daniel</h3>
                    <p>"This academy completely changed my career. I learned web development from scratch and got my first tech job."</p>
                  </div>
                  <div className="card">
                    <img src={card2} alt='jkgiig' />
                    <h3>Grace Michael</h3>
                    <p>"The classNamees were practical and easy to follow. Every lesson helped me become more confident."</p>
                  </div>
                  <div className="card">
                    <img src={card3} alt='jkgiig' />
                    <h3>David Smith</h3>
                    <p>"One of the best learning experiences I've ever had. The instructors were amazing and supportive."</p>
                  </div>
                  </div>
                 </section>
    </div>
  )
}

export default Testimonial