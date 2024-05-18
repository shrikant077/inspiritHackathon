import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './dept1.css'
import { Link } from 'react-router-dom'
import CSE2 from './pictures/CSE2.png'
import g3 from './pictures/g3.png'
import ece2 from './pictures/ece2.jpg'
import inspirit from './pictures/inspirit.png'
import ece from './pictures/ece.jpg'
import CSE from './pictures/CSE.png'

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
                <img alt="First slide" className="d-block w-100" src={CSE2} />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}></h5>
                    <p className="animated bounceInLeft" style={{ animationDelay: '2s' }}></p>
                    <p className="animated bounceInRight" style={{ animationDelay: '3s' }}></p>
                </div>
            </div>
            <div className="carousel-item">
                <img alt="Second slide" className="d-block w-100" src={g3} />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="animated slideInDown" style={{ animationDelay: '1s' }}></h5>
                    <p className="animated fadeInUp" style={{ animationDelay: '2s' }}></p>  
                </div>
            </div>
            <div className="carousel-item">
                <img alt="Third slide" className="d-block w-100" src={ece2} />
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

function Dept1() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Carousel />
            <Section id="Technical">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>DEPT-Information Technology</h2>
                    <h3>Events are conducted by cultural club of IT - INSPIRIT</h3>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={inspirit} alt="" />
                    </div>
                    <div className="service-box" style={{ color: "blue" }}>
                        <h2>INSPIRIT</h2>
                        <p>INSPIRIT is a multifaceted demesne of culture that has been showcased as our department’s cultural fest. From the stage being set up, to the gates being covered in flowers, lights and beautiful posters made by the students, INSPIRIT did it all this past year on __ March 2023.
                            The event embarked on with some wonderfully curated musical performances, followed by a picturesque dance performance featuring the theme “Youth”, incorporating Bengali folk, all performed by the departmental students. The Grand Fashion Show – “ALLURE” won hearts and applause as the students depicted the theme “Elements of Nature” through their confident performance on the runway.
                            In between the performances, the anchors and alumni engaged in shedding some light on wisdom and experience. The showstopper of the night was none other than the renowned singer – Snigdhajit Bhowmik, whose performance mesmerized the crowd, engulfing them into a beautiful haze.
                            The evening’s huge success was possible on account of the immense hard work by the faculty and students of the department. Hence, the department of Information Technology wishes to carry on with this enriching tradition for years to come!</p>
                        <Link to="/itdept" className="btn">Visit us</Link>
                    </div>
                </div>
            </Section>
            <Section id="Cultural">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>DEPT-Electronics and Communication Engineering</h2>
                    <h3>Event are conducted by -ECE department</h3>
                </div>
                <div className="content">
                    <div className="service-box1" style={{ color: "rgb(165, 61, 165)" }}>
                        <h2>eMerge</h2>
                        <p>eMerge is the yearly alumni gathering organized by the Department of Electronics and Communication Engineering (ECE) at Techno India, Salt Lake. This event serves as a platform for former students of the department to reconnect with each other, reminisce about their time at the institution, and share experiences since graduating.
                            During eMerge, alumni have the opportunity to network with fellow graduates, faculty members, and current students. It often includes a variety of activities such as panel discussions, keynote speeches, technical workshops, cultural events, and recreational activities.
                            The event aims to foster a sense of belonging among alumni, promote collaboration and knowledge sharing, and provide opportunities for professional growth and development. It also allows the department to showcase its achievements and advancements to its alumni community.
                            Overall, eMerge is an important occasion for the Department of ECE at Techno India, Salt Lake, to maintain strong connections with its alumni and celebrate their successes while also inspiring current students to follow in their footsteps.</p>
                        <a href="https://www.facebook.com/Cheerio2K23" className="btn">Visit us</a>
                    </div>
                    <div className="image">
                        <img src={ece} alt="ece" />
                    </div>
                </div>
            </Section>
            <Section id="Social">
                <div className="title" data-aos="fade-up" data-aos-duration="3000">
                    <h2>DEPT-Computer Science Engineering</h2>
                    <h3>Events are conducted by -departmental club of CSE</h3>
                </div>
                <div className="content1">
                    <div className="image">
                        <img src={CSE} alt="CSE" />
                    </div>
                    <div className="service-box2">
                        <h2>CSE-UNITED</h2>
                        <p>At a time when the fest frenzy was just catching up, the Department of Computer Science and Engineering of Techno India Salt Lake came up with something quite ingenious. A totally new event, CSE United, the first of its kind was the annual and cultural cum alumni meet which began in the year 2011 under the supervision of the faculties of the department. 6 editions down the timeline, more performances oriented events, a bigger budget became add-ons. The glamour grew exponentially, the event which once begun as a platform to unveil the potential of the students became an ever bonding journey between the students, the alumni and the faculties.</p>
                        <a href="https://www.cseunited.com/" className="btn">Visit us</a>
                    </div>
                </div>
            </Section>
        </div>
    );
}

export default Dept1;
