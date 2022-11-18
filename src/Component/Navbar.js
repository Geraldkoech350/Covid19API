import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from "./../Utils/About.js"
export default function Navbar({ darkMode, setDarkMode }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={darkMode ? "bg-dark text-light navbar-dark" : "bg-light text-dark" + 'container-fluid'}>
            <nav class="navbar navbar-expand-lg  ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex collapse navbar-collapse justify-content-between align-items-center'>
                    <Link to="/" className="nav-link">
                        COVID 19 Tracker
                    </Link>
                    <div className=' col-4'>
                        <div className='d-flex flex-row justify-content-evenly '>
                            <div className='navbar-nav'>

                                <li className='nav-item '>
                                    <Link to="/statistics" className='nav-link '>Statistics</Link>
                                </li>
                                <li className='nav-item '>
                                    <Link to="/analysis" className='nav-link '>Analysis</Link>
                                </li>
                                <li className='nav-item '>
                                    <button
                                        className="btn"
                                        onClick={() => setDarkMode(!darkMode)}
                                    >
                                        {darkMode ? (

                                            <span className="">
                                                TRUE
                                                <i class="bi bi-brightness-high-fill"></i>
                                            </span>
                                        ) : (
                                            <span className="">
                                                fALSE
                                                <i class="bi bi-moon-fill"></i>
                                            </span>
                                        )}
                                    </button>
                                </li>


                                <li className='nav-item '>
                                    <a
                                        className="nav-link"
                                        onClick={() => setModalShow(true)}
                                    >
                                        About
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <AboutUs
                show={modalShow}
                onHide={() => setModalShow(false)}
                darkMode={darkMode}
            />
        </div>
    )
}
