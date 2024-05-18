import React from 'react'
import simron from './images/Simron_img.jpg'
import sayantan from './images/Sayantan_img.jpg'
import sridip from './images/Sridip_img.jpg'
import debomita from './images/Debomita_img.jpg'
import lisha from './images/Lisha_img.jpg'
import shrikant from './images/Shrikant.jpg'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonial-body'>
      <div className="heading-container">
        <h1 className="heading">Core Team Members</h1>
      </div>
      <div className="containerr">
        <div className="testimonial-card">
          <img src={simron} alt="Team Member 1" />
          <h3>Simron Paul</h3>
          <p>Frontend Developer (Team Lead)</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/simron-paul-31b970222/">LinkedIn</a>  ||  <a href="https://github.com/Simron-Paul123">Github</a></p>
        </div>
        <div className="testimonial-card">
          <img src={sayantan} alt="Team Member 2" />
          <h3>Sayantan Nath</h3>
          <p>Frontend Developer</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/sayantan-nath-13021a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></p>
        </div>
        <div className="testimonial-card">
          <img src={shrikant} alt="Team Member 3" />
          <h3>Shrikant Manik Gaikwad</h3>
          <p>Backend Developer</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/shrikant07">LinkedIn</a> || <a href="https://github.com/shrikant077">Github</a></p>
        </div>
        <div className="testimonial-card">
          <img src={sridip} alt="Team Member 3" />
          <h3>Sridip Tah</h3>
          <p>Designer</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/sridip-tah99">LinkedIn</a> || <a href="https://github.com/Sridip-99">Github</a></p>
        </div>
        <div className="testimonial-card">
          <img src={debomita} alt="Team Member 3" />
          <h3>Debomita Bandyopadhyay</h3>
          <p>Frontend Developer</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/debomita-bandyopadhyay-931806229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a> || <a href="https://github.com/debomitabandyopadhyay12">Github</a></p>
        </div>
        <div className="testimonial-card">
          <img src={lisha} alt="Team Member 3" />
          <h3>Lisha Mondal</h3>
          <p>Data Collector</p>
          <p>IT, 3rd Year</p>
          <p><a href="https://www.linkedin.com/in/lisha-mondal-2b71b2225">LinkedIn</a> || <a href="https://github.com/lishamondal22">Github</a></p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
