import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './itdept.scss'
import g5 from './pictures/g5.png'
import g4 from './pictures/g4.png'
import g1 from './pictures/g1.png'
import inspiritlogo from './pictures/inspiritlogo.png'
import deathleticologo from './pictures/deathleticologo.png'
import mindsparklogo from './pictures/mindsparklogo.png'
import INTELLECTLOGO from './pictures/INTELLECTLOGO.png'
import empowerit from './pictures/empowerit.png'
import inspirit from './pictures/inspirit.png'
import deathletico from './pictures/DEATHLETICO1.png'
import bizzit from './pictures/Bizzit.png'
import ignite from './pictures/Ignite.png'
import iteration from './pictures/Iteration1.png'
import bonvoyage from './pictures/Bon-voyage.png'
import alumni from './pictures/Alumni-meet.png'
import coding from './pictures/Coding-competition.png'
import project from './pictures/Project-competition.png'

function Carousel() {
    return (
        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleAutoplaying">
            <ol className="carousel-indicators" style={{ zIndex: 1 }}>
                <li className="active" data-slide-to="0" data-bs-target="#carouselExampleAutoplaying"></li>
                <li data-slide-to="1" data-bs-target="#carouselExampleAutoplaying"></li>
                <li data-slide-to="2" data-bs-target="#carouselExampleAutoplaying"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img alt="First slide" className="d-block w-100" src={g5} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>welcome</h5>
                        <p className="animated bounceInLeft" style={{ animationDelay: '2s' }}>to the Department of Information Technology of Techno Main Saltlake</p>
                        <p className="animated bounceInRight" style={{ animationDelay: '3s' }}></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img alt="Second slide" className="d-block w-100" src={g4} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated slideInDown" style={{ animationDelay: '1s' }}></h5>
                        <p className="animated fadeInUp" style={{ animationDelay: '2s' }}></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img alt="Third slide" className="d-block w-100" src={g1} />
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


function Itdept() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>

            <Carousel />
            <section className="container" id="About" data-aos="fade-up" data-aos-duration="3000">
                <div className="title container" data-aos="fade-up" data-aos-duration="3000">
                    
                    <h2>About Us</h2>
                    <p>
                        <b><i>THE DEPARTMENT OF INFORMATION TECHNOLOGY.</i></b>
                    </p>
                </div>
                <div className="container" data-aos="fade-up" data-aos-duration="3000">
                    <p>
                        Techno Main Salt Lake, a premier educational institution was established in the year 2001, initially with 4 AICTE approved Degree Engineering courses including the department of Information Technology. Since its inception, the department has been committed to providing a conducive learning environment to its students and preparing them for the challenges of the ever-evolving IT industry. The department is constantly trying to evolve, advance, and enhance the fundamentals of IT with a motive to build interest amongst students for specialized research, develop skills, and create the ability in them for better academic credentials.
                        Moreover, the department offers various co-curricular activities for showcasing their inner talents. It has an active student association that plays a crucial role in organizing a variety of events and activities. From cultural programs and seminars to technical workshops and community outreach initiatives, contributing to the holistic development of students.
                        Department of Information Technology strives towards making the learning experience promising for the aspirants so that nothing stands as a barrier between the students and success.
                        <br />
                        A club is a big part of college life. A group of students organized with a similar interest for sports, cultural, and technical purpose brings out new aspects and transitions in their lives.
                        In view of the students, from the year of 2013, the department of Information Technology started its own club - InspirIT, the official cultural club of the department, and Deathletico, the official sports club of the department of Information Technology.
                        With the goal to provide students with knowledge and resources, in the year of 2021, the department of Information Technology introduced the official technical club - Mindspark which consists of IntellecT, the coding club of the department of Information Technology, and EmpowerIT, a startup and ideation club of the department of Information Technology.
                    </p>
                </div>
            </section>

            <div className="section reveal" data-aos="fade-up" data-aos-duration="3000">
                <section id="clubs" className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="3000">
                        <h2>CLUBS</h2>
                        <h3>Of Information Technology</h3>
                    </div>
                    <div className="clubsinfo container" data-aos="fade-up" data-aos-duration="3000">
                        <div className="container">
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={inspiritlogo} alt="inspiritlogo" />
                                        <h3>INSPIRIT</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p> In the view of the students, from the year of 2013, the department of Information Technology started its own club - InspirIT, the official cultural club of the department.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={deathleticologo} alt="deathleticologo" />
                                        <h3>DE'ATHLETICO</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>The Department of Information Technology believes in the motto of service towards society and hence started De-Athletico, the official Social Services club under InspirIT.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={mindsparklogo} alt="mindsparklogo" />
                                        <h3>MINDSPARK</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>The technical club that focuses on technology and its various applications. The club provides a platform for students to learn about emerging technologies and develop skills in areas such as programming, web development.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={INTELLECTLOGO} alt="INTELLECTLOGO" />
                                        <h3>INTELLECT</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>A coding club is a student organization that provides a platform for students to learn and develop their coding skills.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={empowerit} alt="empowerit" />
                                        <h3>EMPOWERIT</h3>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <p>Empower IT brings together aspiring entrepreneurs to share ideas, collaborate, and learn from each other. The club's primary objective is to create a community of like-minded individuals who are passionate about starting and growing businesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <div id="Event">
                <div className="section reveal">
                    <section id="Technical" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>CULTURAL EVENT</h2>
                            <h3>conducted by the cultural club of IT department</h3>
                        </div>
                        <div className="content">
                            <div className="image">
                                <img src={inspirit} alt="" />
                            </div>

                            <div className="service-box">
                                <h2>INSPIRIT</h2>

                                <p>
                                    INSPIRIT is a multifaceted demesne of culture that has been showcased as our department’s cultural fest. From the stage being set up, to the gates being covered in flowers, lights and beautiful posters made by the students, INSPIRIT did it all this past year on __ March 2023. The event embarked on with some wonderfully curated musical performances, followed by a picturesque dance performance featuring the theme “Youth”, incorporating Bengali folk, all performed by the departmental students. The Grand Fashion Show – “ALLURE” won hearts and applause as the students depicted the theme “Elements of Nature” through their confident performance on the runway. In between the performances, the anchors and alumni engaged in shedding some light on wisdom and experience. The showstopper of the night was none other than the renowned singer – Snigdhajit Bhowmik, whose performance mesmerized the crowd, engulfing them into a beautiful haze. The evening’s huge success was possible on account of the immense hard work by the faculty and students of the department. Hence, the department of Information Technology wishes to carry on with this enriching tradition for years to come!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Cultural" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>SPORTS EVENT</h2>
                            <h3>Conducted by -sports club of IT department</h3>
                        </div>
                        <div className="content">
                            <div className="service-box1" style={{ color: 'rgb(165, 61, 165)' }}>
                                <b><h2>DE' ATHLETICO</h2></b>

                                <p>
                                    De-Athletico, the official Social Services club under INSPIRIT organized the Annual Sports Tournament as The Social Welfare Initiative by the Department of Information
                                    Technology. The impoverished children from Ramakrishna Mission Anathbhandar were welcomed with open arms on our campus, as the whole sporting event was dedicated to helping them.
                                    To make a fun activity for the children, the team arranged an art competition, providing them with materials which they used to exhibit their artistic qualities! Being awarded with goodies and prizes made them smile from ear to ear. Not only did they shine in arts but their participation in the sports activities filled everyone with immense joy.
                                    Apart from the children, the students also ardently took part in cricket, football, kabaddi, tug-of-war, footrace and sprint. The winners were awarded in a prize distribution ceremony for their incredible performance! But it wasn’t the winners who only shined, all the participants were basking in glory after performing with such incredible sportsmanship.
                                </p>
                            </div>
                            <div className="image">
                                <img src={deathletico} alt="anakhronus1" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Social" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>BUSINESS IDEA COMPETITION</h2>
                            <h3>Conducted by -INSPIRIT</h3>
                        </div>
                        <div className="content1">
                            <div className="image">
                                <img src={bizzit} alt="bizzit" />
                            </div>

                            <div className="service-box2">
                                <h2>BIZZ-IT</h2>
                                <p>
                                    BizzIT, under Inspirit is a business idea competition that invites teams to submit innovative business ideas for evaluation to encourage creativity and foster new business ventures. Participants are invited to present their ideas to a panel of judges, who evaluate the feasibility, scalability, and potential impact of each proposal. Our motto is to provide valuable networking opportunities and exposure to potential investors and instill the spirit of innovation in today's youth.
                                    BizzIT is a way to spread the idea of business and entrepreneurship among the youth of today, provide guidance, mentorship, and provide reality tomorrow to today's idea.
                                    It's our take to promote entrepreneurship and spur innovation, while also providing valuable support to new and emerging business leads.
                                    It's our take to promote entrepreneurship and spur innovation, while also providing valuable support to new and emerging business leads
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Technical" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>EMPOWERIT ANNUAL EVENT</h2>
                            <h3>Conducted by - MindSpark</h3>
                        </div>
                        <div className="content">
                            <div className="service-box">
                                <h2>IGNITE</h2>
                                <p>
                                    On the 15th of March, EmpowerIT hosted their annual event, Ignite, which was organized by Team MindSpark from the Department of Information Technology at Techno Main Salt Lake. The event was a grand success and was graced by the presence of two distinguished guests - Ms. Sujata Chatterjee, the founder of TWIRL.STORE, and Ms. Neelu Jain, the CEO of Khrysalis Training & Consultancy LLP and Emerge Finishing School.
                                    The event began with a warm welcome to the guests and an introduction to EmpowerIT and its mission. The guests then shared their thoughts on the importance of technology and the role it plays in the development of society. They also spoke about their own experiences in the industry and offered valuable advice to the students in attendance
                                </p>
                            </div>
                            <div className="image">
                                <img src={ignite} alt="ignite" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Cultural" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Technical Hackathon</h2>
                            <h3>Conducted by -INSPIRIT</h3>
                        </div>
                        <div className="content">
                            <div className="image mx-2">
                                <img src={iteration} alt="anakhronus1" />
                            </div>
                            <div className="service-box1" style={{ color: 'rgb(165, 61, 165)' }}>
                                <b><h2>ITERATION</h2></b>

                                <p>
                                    Iteration, under inspirit is a technical hackathon where groups of students come together, collaborate and work intensively on a problem statement which was provided by hoichoi.Tech, our official title sponsor for inspirit, 2022. The event also saw the signing of a Memorandum of Understanding between Techno India University and Pace University strengthening the bonds between the two universities, The goal of a hackathon is to develop innovative solutions to real-world problems using technology. Iteration is a great opportunity for students to hone their technical skills, work on real-world problems, and network with peers and industry experts
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Social" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>Farewell Event</h2>
                            <h3>Conducted by -INSPIRIT</h3>
                        </div>
                        <div className="content1">

                            <div className="service-box2">
                                <h2>BON-VOYAGE</h2>
                                <p>
                                    BON VOYAGE is the farewell ceremony of the department
                                    of Information Technology which is celebrated with a lots of
                                    zeal and enthusiasm to celebrate the end of a long journey
                                    and the beginning of a new chapter of the final year students.
                                    The celebration begins with the lighting of the lamp followed
                                    by cultural events, skits, and other fun activities to reminisce
                                    about the good times they’ve had during the past years. Each
                                    of the students are offered gifts and memento as a token of
                                    appreciation from the department. It’s a gift from the juniors
                                    to our beloved seniors for which a month long preparation
                                    and planning takes place.
                                    BON VOYAGE is to relive all those moments that made us
                                    laugh, the lessons that we learned, and the friendships that
                                    we made. It's the time to acknowledge and appreciate the
                                    efforts of our teachers and mentors who have helped us
                                    grow and learn.
                                    It’s a token of love and appreciation to our loved seniors
                                </p>
                            </div>
                            <div className="image">
                                <img src={bonvoyage} alt="filan" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Social" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>ALUMNI MEET</h2>
                            <h3>Conducted by -clubs of IT department</h3>
                        </div>
                        <div className="content1">
                            <div className="image">
                                <img src={alumni} alt="filan" />
                            </div>

                            <div className="service-box2">
                                <h2>ALUMNI-MEET</h2>
                                <p>
                                    the alumni meet was a fantastic event that brought
                                    together the institute's past, present, and future. The event was a
                                    reminder of the institute's commitment to nurturing successful
                                    professionals and maintaining strong connections with its alumni.
                                    But we hope to continue this legacy every year and call a segment
                                    of our IT family to celebrate the bond we share with our alumni
                                    members
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Social" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>CODING COMPETITION</h2>
                            <h3>Conducted by -clubs of IT department</h3>
                        </div>
                        <div className="content1">

                            <div className="service-box2">
                                <h2>CODING COMPETITION</h2>
                                <p>
                                    With the series of Competitive Coding
                                    Competitions, the students have developed the
                                    innate reflex to solve any given complicated
                                    problem by taking simpler mathematical
                                    approaches.
                                </p>
                            </div>
                            <div className="image">
                                <img src={coding} alt="coding" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="section reveal">
                    <section id="Social" data-aos="fade-up" data-aos-duration="3000">
                        <div className="title" data-aos="fade-up" data-aos-duration="3000">
                            <h2>PROJECT COMPETITION</h2>
                            <h3>Conducted by -clubs of IT department</h3>
                        </div>
                        <div className="content1">
                            <div className="image">
                                <img src={project} alt="project" />
                            </div>

                            <div className="service-box2">
                                <h2>PROJECT COMPETITION</h2>
                                <p>
                                    Under the guidance of our alumni mentors and
                                    teachers, our students got the chance to work
                                    with the best technologies and projects to
                                    innovate their ideas. 12 teams were selected
                                    after thorough screening. Among them, the top
                                    3 were selected based on ideation, presentation
                                    and implementation.The project competition posed as a platform to
                                    showcase some innovative projects that were
                                    created with sheer determination and support from
                                    our faculty body and alumni.
                                    With the motive to expand furthur by creating,
                                    learning and implementing, IntellecT ventures out
                                    for equiping our students to be the part of the next
                                    Mega-Evolution in the field of technology
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Itdept;
