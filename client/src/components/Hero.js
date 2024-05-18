import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import clg4 from "../pictures/clg4.png"
import clg2 from "../pictures/clg2.png"
import clg3 from "../pictures/clg3.png"
import "./style.css";
const Hero = () => {
    return (
        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleAutoplaying">
            <ol className="carousel-indicators" style={{zIndex: 1}}>
                <li className="active" data-slide-to="0" data-bs-target="#carouselExampleAutoplaying"></li>
                <li data-slide-to="1" data-bs-target="#carouselExampleAutoplaying"></li>
                <li data-slide-to="2" data-bs-target="#carouselExampleAutoplaying"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img alt="First slide" className="d-block w-100" src={clg4} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Event Managment Portal</h5>
                        <p className="animated bounceInLeft" style={{ animationDelay: '2s' }}>Welcome to Event-managment Portal of Techno Main Saltlake</p>
                        <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#About">More Info</a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img alt="Second slide" className="d-block w-100" src={clg2} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated slideInDown" style={{ animationDelay: '1s' }}>Departmental Events</h5>
                        <p className="animated fadeInUp" style={{ animationDelay: '2s' }}>Stay tuned for exciting departmental events that showcase the talents and achievements of our students.</p>
                        <p className="animated zoomIn" style={{ animationDelay: '3s' }}><a href="/">More Info</a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img alt="Third slide" className="d-block w-100" src={clg3} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated zoomIn" style={{ animationDelay: '1s' }}>Other Club-Events</h5>
                        <p className="animated fadeInLeft" style={{ animationDelay: '2s' }}>Experience the diverse and exciting club events that showcase the talents and interests of our student body!</p>
                        <p className="animated zoomIn" style={{ animationDelay: '3s' }}><a href="/">More Info</a></p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" data-slide="prev" href="#carouselExampleAutoplaying" role="button">
                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" data-slide="next" href="#carouselExampleAutoplaying" role="button">
                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Hero