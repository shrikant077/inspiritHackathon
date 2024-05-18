import React from 'react'
import './styles.css'
import img1 from './parambh.png'
import img2 from './ankuran.png'
const Ankuran = () => {
  return (
    <div className="container-float p-5 my-5 mt-3 border">
        <h1><u><b>TEAM ANKURAN</b></u></h1>
        <br/>
        <h3>Team Ankuran stands on the principle of togetherness and that together we can overcome any obstacle thrown our way. A team which is packed with people with various talents and capabilities, and always looks forward to having fresh, budding individuals who love to work as a team. Here we appreciate and accept that change is the only constant in life and to keep going, we must keep blooming by learning new things with each passing day.</h3>
        <br/>
        <h2><u><b>Mega Events</b></u></h2>
        <div className="card border shadow-lg p-3 mb-5 mt-5">
            <div className="card-container"> 
            <img className="card-img-top customimg img-thumbnail" src={img1} alt="Cardimage"/>
            <div className="card-body">
                <h2 className="card-title"><u>Prarambh</u></h2>
                <h3 className="card-text">The Freshers Welcome Event of Techno Main Salt Lake organized by Team Ankuran.</h3>
            </div></div>
        </div>
            <br/>
            <div className="card border shadow-lg p-3 mb-5 mt-5">
                <div className="card-container"> 
                <div className="card-body">
                    <h2 className="card-title"><u>Ankuran</u></h2>
                    <h3 className="card-text">The Annual Cultural Fest of Techno Main Salt Lake organized by Team Ankuran.</h3>
                </div>
                <img className="card-img-top customimg img-thumbnail" src={img2} alt="Cardimage"/>
            </div>
            </div>
    </div>
  )
}

export default Ankuran;