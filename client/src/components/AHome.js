import React from 'react'
import Hero from './Hero'
import About from './About'
// import Clubs from './Clubs'
import Ongoingevents from './Ongoingevents'
import './style.css'
import Testimonials from './Testimonials/Testimonials'

const AHome = () => {
  return (
    <div>
      <Hero/>
      {/* <Clubs/> */}
      <Ongoingevents/>
      <br />
      <About/>
      <hr />
      <Testimonials/>
      <hr />
      
    </div>
  )
}

export default AHome
