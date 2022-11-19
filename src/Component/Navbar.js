import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from "./../Utils/About.js"
export default function Navbar({ darkMode, setDarkMode }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={(darkMode ? "bg-dark text-light navbar-dark" : "bg-light text-dark") + 'container-fluid'}>
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
                                    <Link to="/statistics" className={(darkMode ? "text-light nav-link" : "text-dark nav-link") + " "}>Statistics</Link>
                                </li>
                                <li className='nav-item '>
                                    <Link to="/analysis" className={(darkMode ? "text-light nav-link" : "text-dark nav-link") + " "}>Analysis</Link>
                                </li>
                                <li className='nav-item '>
                                    <button
                                        className={(darkMode ? "text-light nav-link btn" : "text-dark nav-link btn") + " "}
                                        onClick={() => setDarkMode(!darkMode)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </button>
                                </li>


                                <li className='nav-item '>
                                    <a
                                        className={(darkMode ? "text-light nav-link" : "text-dark nav-link") + " "}
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
