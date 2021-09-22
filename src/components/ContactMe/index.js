import React from "react";
import contactImage from './images/coffee-and-laptop.jpeg';
import resume from './resources/resume-2021.pdf';
import './style.css';


const ContactMe = () => {

  return (
    <div class="container-fluid about-me" id="contact-me">
            <h3 class="text-center" id="about-me-title"> CONTACT ME </h3>
            <hr id="line-design"></hr>
            <div class="row">
                <div class="col-md-6">
                    <img class="contact-img img-fluid" src={contactImage} style={{ height: '225px', display: 'block', float: 'right', borderRadius: '15px', }} alt="Contact"></img>
                </div>
                <div class="col-md-6 contact-info">
                    <h6> <i class="contact-icon fas fa-map-marker-alt"></i> Charlotte, NC </h6>
                    <h6> <i class="contact-icon fas fa-phone-alt"></i> 252.375.7430 </h6>
                    <h6> <i class="contact-icon far fa-paper-plane"></i> einernava@gmail.com </h6>
                    <h6> <i class="contact-icon fas fa-file-pdf"></i> <a href={resume}>Resume</a> </h6>
                </div>
            </div>
        </div>
  )
}

export default ContactMe;
