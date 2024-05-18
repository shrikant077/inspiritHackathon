import React from 'react'
import img1 from './Curbrain.png'
import img2 from './CyberCrusade.png'
import img3 from './RRC.png'
import img4 from './Design.png'
import img5 from './Newron.png'
import img6 from './CIIC.png'
import img7 from './Infocus.png'
import img8 from './Create IT.png'
import img9 from './elevation.png'
import img10 from './fff.png'
import './styles.css'
const Geekonix = () => {
    return (
        <div className="container-float p-5 my-5 mt-3 border">
            <h1><u><b>GEEKONIX</b></u></h1>
            <br />
            <h2>Geekonix is the official Science & Technology club of Techno Main Salt Lake.</h2>
            <br />
            <h2><u><b>Clubs Of Geekonix -</b></u></h2>
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container"> <img className="card-img-top customimg img-thumbnail" src={img1} alt="Cardimage" />
                    <div className="card-body">
                        <h2 className="card-title"><u>CUrBrain</u></h2>
                        <h3 className="card-text">The official coding club of Geekonix - Befitting place for passionate coders to showcase their skills.</h3>
                    </div></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-title"><u>Cyber Crusade</u></h2>
                        <h3 className="card-text">The official gaming club under Geekonix and the abode of the gamers.</h3>
                    </div>
                    <img className="card-img-top customimg img-thumbnail" src={img2} alt="Cardimage" /></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container"> <img className="card-img-top customimg img-thumbnail" src={img3} alt="Cardimage" />
                    <div className="card-body">
                        <h2 className="card-title"><u>Robopalz Robotics Club</u></h2>
                        <h3 className="card-text">The official robotics club of Geekonix is where robotics enthusiasts find their home.</h3>
                    </div></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5">
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-title"><u>Geek Designs</u></h2>
                        <h3 className="card-text">This ingenious club under Geekonix aims at giving a platform to the creative minds to paint their thoughts and explore the world of art and animation.</h3>
                    </div>
                    <img className="card-img-top customimg img-thumbnail" src={img4} alt="Cardimage" /></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container"> <img className="card-img-top customimg img-thumbnail" src={img5} alt="Cardimage" />
                    <div className="card-body">
                        <h2 className="card-title"><u>Newron</u></h2>
                        <h3 className="card-text">The official Quizzing, Debating, and Electronics club of Geekonix, gives you the power to bring a change in the world.</h3>
                    </div></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-title"><u>CIIC Money Matters</u></h2>
                        <h3 className="card-text">Centre of Innovation, Incubation & Creation made to nurture young entrepreneurial brains.</h3>
                    </div>
                    <img className="card-img-top customimg img-thumbnail" src={img6} alt="Cardimage" /></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container"> <img className="card-img-top customimg img-thumbnail" src={img7} alt="Cardimage" />
                    <div className="card-body">
                        <h2 className="card-title"><u>InFocus</u></h2>
                        <h3 className="card-text">Official photography club of Geekonix, where moments are transformed into memories.</h3>
                    </div></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-title"><u>Create-It & Innovati</u></h2>
                        <h3 className="card-text">Turning your ideas into reality with creativity meshed with scientific technology and wit.</h3>
                    </div>
                    <img className="card-img-top customimg img-thumbnail" src={img8} alt="Cardimage" /></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container"> <img className="card-img-top customimg img-thumbnail" src={img9} alt="Cardimage" />
                    <div className="card-body">
                        <h2 className="card-title"><u>Elevation</u></h2>
                        <h3 className="card-text">The platform for using your analytics and problem-solving skills to shape up a bridge using CAD software or to create a simple model design of it.</h3>
                    </div></div>
            </div>
            <br />
            <div className="card border shadow-lg p-3 mb-5 mt-5" >
                <div className="card-container">
                    <div className="card-body">
                        <h2 className="card-title"><u>Food For Fun</u></h2>
                        <h3 className="card-text">The platform for using your analytics and problem-solving skills to shape up a bridge using CAD software or to create a simple model design of it.</h3>
                    </div>
                    <img className="card-img-top customimg img-thumbnail" src={img10} alt="Cardimage" /></div>
            </div>
        </div>
    )
}

export default Geekonix
