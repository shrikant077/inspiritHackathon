import React from 'react'
import collegelogo from "../pictures/tmslogo.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./style.css"
const Navbar = () => {
    const [cookies, removeCookie] = useCookies([]);
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                setLoggedin(false);
            }
            const { data } = await axios.post(
                "http://localhost:5050",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            // console.log(user);
            return status
                ? setLoggedin(true)
                : setLoggedin(false);
        };
        verifyCookie();
    }, [cookies, removeCookie]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navcustom fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={collegelogo} alt="" width="150px" /></Link>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ height: "100vh" }}>
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{ zIndex: "5" }}>
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link max-lg-2" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link max-lg-2" href="/#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link max-lg-2" href="/#ongoing">Ongoing Events </a>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link max-lg-2" to="/departmental">Departmental Club</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link max-lg-2" to="/nondepartmental">Non-Departmental Club</Link>

                                </li>                                
                            </ul>

                        </div>
                    </div>
                    {loggedin === true ? <div>
                        <Link to="/changepassword" className="btn btn-success btn-sm mx-2">Change Password</Link>
                        <Link to="/events" className="btn btn-success btn-sm">Manage Events</Link>
                    </div> : <Link to="/login" className="btn btn-success btn-sm">Admin-Login</Link>}
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" bg="grey" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
