import React from "react";
import './style.css';

const Header = () => {

  return (
    <div className="container-fluid background-img1 text-center img-fluid" id="home" style={{ backgroundImage: `url('/portrait-2.jpg'})` }} >
      <h1 className="display-5 fw-normal" id="name-title">OMAR NAVA</h1>
      <h6 className="text-center" id="job-subtitle">Web Developer / Graphic Designer / Photographer</h6>
    </div>
  )
}

export default Header;