import React from 'react'
import img1 from '../pictures/club3.png'
import './itdept.css'
const Otherdept = () => {
    return (
        <div className='deptbody'>
            <h1 className='header1 text-white' >TMSL Clubs</h1>
            <div className="container">
                <div className="item">
                    <img src="https://0701.static.prezi.com/preview/v2/a247t4xhflk2yhxt7ffhj7b2kx6jc3sachvcdoaizecfr3dnitcq_3_0.png" alt="Inspirit" />
                    <div className="info">
                        <h2 className='header2'>Geekonix</h2>
                        <p className='para'>Geekonix is the official Science & Technology club of Techno Main Salt Lake. Edge: Where Innovation Meets Inspiration - Geekonix's premier tech fest at Techno Main Saltlake, pushing the boundaries of technology!</p>
                        <a className="btn btn-primary" href="https://geekonix.org/" target="_blank" rel="noopener noreferrer">
                            Visit our website
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <h2 className='header2'>A N A K H R O N U S</h2>
                        <p className='para'>Cultural Club: Unleashing Timeless Creativity - Experience the magic of the past, present, and future
                            through Ankuran's cultural extravaganza!
                        </p>
                        <a className="btn btn-primary" href="https://anakhronos.in/" target="_blank" rel="noopener noreferrer">
                            Visit our website
                        </a>
                    </div>
                    <img src={img1} alt="Inspirit" />
                </div>
                <div className="item">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/50845695187351.5e9182b2d9358.jpg" alt="Mindspark" />
                    <div className="info">
                        <h2 className='header2'>Samaritans: Social Club</h2>
                        <p className='para'>"Philanthropiya: Spreading Smiles, Changing Lives - Join Samaritans in a festival of giving back
                            and making a difference in our community!"</p>
                            <a className="btn btn-primary" href="https://samaritansti.org.in/" target="_blank" rel="noopener noreferrer">
                            Visit our website
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Otherdept
