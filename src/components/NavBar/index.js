import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" href="#about-me">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" href="#contact-me">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link" href="#contact-me">Portfolio</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="">Web Development</a></li>
                                <li><a className="dropdown-item" href="">Graphic Design</a></li>
                                <li><a className="dropdown-item" href="">Photography</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;