import React from "react";
import './style.css';

const Footer = () => {

  return (
    <footer>
        <div className="icon-links d-flex justify-content-center">
            <a className="mx-2 icon" target="_blank" rel="noreferrer" href="https://instagram.com/einer.nava"> <i className="fab fa-instagram fa-2x"></i> </a>
            <a className="mx-2 icon" target="_blank" rel="noreferrer" href="https://github.com/omar-94"> <i className="fab fa-github fa-2x"></i> </a>
            <a className="mx-2 icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/einer-omar-nava/"> <i className="fab fa-linkedin fa-2x"></i></a>
            {/* <a className="mx-2 icon" href="https://www.linkedin.com/in/einer-omar-nava/"> <i class="fab fa-linkedin-in fa-2x"></i> </a> */}
        </div>
        <p className="copyright d-flex justify-content-center">OMAR NAVA - &copy; 2021</p>
    </footer>

  )
}

export default Footer;