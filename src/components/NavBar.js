import React from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from './newspic.png';

const NavBar = (props) => {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="">
                    <img src={logo} alt="NM" height="50px" />
                </div>
                <Link className="navbar-brand" to="/">{props.title}
                    <span className="text-primary font-weight-bold">{props.end}</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                            <Link className="nav-link"
                                aria-current="page"
                                to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/business" ? "active" : ""}`}>
                            <Link className="nav-link"
                                to="/business">Business</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/entertainment" ? "active" : ""}`}>
                            <Link className="nav-link"
                                to="/entertainment">Entertainment</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/general" ? "active" : ""}`}>
                            <Link className="nav-link"
                                to="/general">General</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/health" ? "active" : ""}`}>
                            <Link className="nav-link"
                                to="/health">Health</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/science" ? "active" : ""}`}>
                            <Link className={`nav-link`}
                                to="/science">Science</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/sports" ? "active" : ""}`}>
                            <Link className={`nav-link`}
                                to="/sports">Sports</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/technology" ? "active" : ""}`}>
                            <Link className={`nav-link`}
                                to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default NavBar