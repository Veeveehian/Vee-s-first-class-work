import React from 'react'

const Services = () => {
  return (
    <div>
        <section className='agendaSection'>
        <h1>The Agenda</h1>
        <div className='agendaContainer'>
        <div className='agenda1'>
          <h3>Quality Education</h3>
           {/* <img src={card1} alt="alt" /> */}
          <p>To provide students with quality, accessibile, and practical education that prepared them for the future.</p>
        </div>
        <div className='agenda2'>
          <h3>Student Development</h3>
          <p>To encourage students to develop their academic, creative, leadership, and interpersonal skills.</p>
        </div>
        <div className='agenda3'>
          <h3>Innovation & Technology</h3>
          <p>To embrace modern technology and innovative methods of learning to make education more engaging and effective.</p>
        </div>
        <div className='agenda4'>
          <h3>Character & Leadership</h3>
          <p>To build responsible, condifent, and innovative method of learning to make education more engaging and effective.</p>
        </div>
        <div className='agenda5'>
          <h3>Community & Excellence</h3>
          <p>To create an inclusive learning community where students and staff work together toward continous growth and excellence.</p>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Services