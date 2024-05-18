import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './nondept.css'
import edge1 from './pictures/edge1.jpg'
import ankuran1 from './pictures/ankuran1.jpg'
import samaritans from './pictures/samaritans.jpg'
import edge2 from './pictures/edge2.jpg'
import anakhronus1 from './pictures/anakhronus1.jpeg'
import filan from './pictures/filan.jpg'

function Carousel() {
    return (
        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleAutoplaying">
        <ol className="carousel-indicators" style={{zIndex: 1}}>
            <li className="active" data-slide-to="0" data-bs-target="#carouselExampleAutoplaying"></li>
            <li data-slide-to="1" data-bs-target="#carouselExampleAutoplaying"></li>
            <li data-slide-to="2" data-bs-target="#carouselExampleAutoplaying"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img alt="First slide" className="d-block w-100" src={edge1} />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}></h5>
                    <p className="animated bounceInLeft" style={{ animationDelay: '2s' }}></p>
                    <p className="animated bounceInRight" style={{ animationDelay: '3s' }}></p>
                </div>
            </div>
            <div className="carousel-item">
                <img alt="Second slide" className="d-block w-100" src={ankuran1} />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="animated slideInDown" style={{ animationDelay: '1s' }}></h5>
                    <p className="animated fadeInUp" style={{ animationDelay: '2s' }}></p>  
                </div>
            </div>
            <div className="carousel-item">
                <img alt="Third slide" className="d-block w-100" src={samaritans} />
                <div className="carousel-caption d-none d-md-block">                        
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
    );
}

function Section({ id, children }) {
    return (
        <div className="section reveal">
            <section id={id} data-aos="fade-up" data-aos-duration="3000">
                {children}
            </section>
        </div>
    );
}

function Nondept() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Carousel />
            <Section id="Technical">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>Technical-Club Event</h2>
                    <h3>Conducted by -Geekonix</h3>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={edge2} alt="edge2" />
                    </div>
                    <div className="service-box" style={{ color: "blue" }}>
                        <h2>EDGE</h2>
                        <p>The official Science and Technology club of Techno Main Salt Lake - <b>Geekonix</b> marked its inception in the year 2005 and since then, the journey to inspire young minds to harbour and nurture their technological wavelengths in a friendly environment has created and established milestones in the field. Our enthusiasts have paved their way towards innovation, creation and ideation of technology and through cultivating the skills they have created a friendly atmosphere of competitions in different fields of interest. Under the hood of Geekonix we have 10 sub-clubs covering various domains of gaming, coding, robotics, entrepreneurship, photography, debating, etc. Geekonix organizes EDGE, the annual techno-management fest of our college where we provide the exuberance of 3-days comprising of 30+ technical events. Amidst the plethora of events we also have fun-filled and light-hearted evenings like EDGE NIGHTS. During EDGE, we witness participation from all over the country all of them coming together to the final showdown and perform in their fiercest way to beat the better and be the best.</p>
                        <a href="https://geekonix.org/" className="btn">Visit us</a>
                    </div>
                </div>
            </Section>
            <Section id="Cultural">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>Cultural-Club Event</h2>
                    <h3>Conducted by -Ankuran</h3>
                </div>
                <div className="content">
                    <div className="service-box1" style={{ color: "rgb(165, 61, 165)" }}>
                        <h2>ANAKHRONUS</h2>
                        <p>It is the stage to one of the largest cultural fests of Kolkata  which is Organized by the cultural club of Techno Main Saltlake <b>Ankuran</b>.A conglomeration of Greek words “Ana” & “Khronos”, Anakhronos translates to “Moments Surpassing Time”. With a series of exhilarating star performances and enthralling participation of young talents from across the city in various events, Anakhronos has always been a platform to etch an unforgettable memory of joyful moments in the canvas of time.</p>
                        <a href="https://anakhronos.in/" className="btn">Visit us</a>
                    </div>
                    <div className="image">
                        <img src={anakhronus1} alt="anakhronus1" />
                    </div>
                </div>
            </Section>
            <Section id="Social">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>Social-Club Event</h2>
                    <h3>Conducted by -Samaritans</h3>
                </div>
                <div className="content1">
                    <div className="image">
                        <img src={filan} alt="filan" />
                    </div>
                    <div className="service-box2">
                        <h2>FILANTHROPIA</h2>
                        <p>Filanthropia, the social awareness fest of Techno Main, Salt Lake, set its wings in 2016 as the first philanthropic fest ever of its kind in Kolkata. This noble initiative has been the brainchild of the NSS Club of Techno Main, Salt Lake, which rightfully calls itself the <b>“SAMARITANS”</b>. Over the past years, FILANTHROPIA has been a way towards creating a compassionate society. We, the Samaritans, have organized Free Eye Check-up camps, Photography contest (with a social message), and Sit-and-Draw competitions (for NGO children).</p>
                        <a href="https://samaritansti.org.in/filanthropia/" className="btn">Visit us</a>
                    </div>
                </div>
            </Section>
        </div>
    );
}

export default Nondept;
