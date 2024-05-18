import React, { useState } from 'react';
import "./style.css";

const Clubs = () => {
  // State for managing hover state of each box
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div>
      <section id="clubs">
        <div className="title">
          <h5>Clubs</h5>
          <p>
            <b><i>For more information hover on the images.</i></b>
          </p>
        </div>
      </section>
      <div className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className={`box ${isHovered1 ? 'animate' : ''}`}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <div className="content">
                  <div className="front img-1">
                    {/* Front Content */}
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <h2>Technical Club</h2>
                      <p>"Edge: Where Innovation Meets Inspiration - Geekonix's premier tech fest at Techno Main Saltlake,
                        pushing the boundaries of technology!"</p>
                      <a href="https://geekonix.org/" target="_blank" rel="noopener noreferrer">
                        Visit our website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the same structure for other club boxes */}
            <div className="col-lg-4 col-sm-12">
              <div className={`box ${isHovered2 ? 'animate' : ''}`}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <div className="content">
                  <div className="front img-2">
                    {/* Front Content */}
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <h2>Cultural Club</h2>
                      <p>"Anakhronus: Unleashing Timeless Creativity - Experience the magic of the past, present, and future
                        through Ankuran's cultural extravaganza!"</p>
                      <a href="https://anakhronos.in/" target="_blank" rel="noopener noreferrer">
                        Visit our website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className={`box ${isHovered3 ? 'animate' : ''}`}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <div className="content">
                  <div className="front img-3">
                    {/* Front Content */}
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <h2>social Club</h2>
                      <p>"Philanthropiya: Spreading Smiles, Changing Lives - Join Samaritans in a festival of giving back
                        and making a difference in our community!"</p>
                      <a href="https://samaritansti.org.in/" target="_blank" rel="noopener noreferrer">
                        Visit our website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
