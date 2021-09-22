import React from "react";
import './style.css';

const AboutMe = () => {

  return (
    <div className="about-me" id="about-me">
            <h3 className="text-center" id="about-me-title"> ABOUT ME </h3>
            <hr id="line-design"></hr>
            <div>    
                <p>With a technical mind and a creative drive, I seek to combine the best of my both worlds into a visual experience.</p>

                <p> Originally from Greenville, NC, I attended East Carolina University where there I received by Bachelors in Fine Arts with a concentration in Graphic Design and a minor in Business Administration.
                Developing my acquired skillsets, I have since worked on freelance design projects for small owners to help bring an established feel for their business. Designing products anywhere from business cards, stationary, to other promotional materials.</p>

                <p>Along with being a creative person, I have been a tech savvy individual my whole life. Always having an intriguing curiosity for code... my journey has led me to web design/development. Having the ability to mix both worlds has been exciting and rewarding so far! I hope to continue to pursue this passion to create clean and beautiful visual experiences across the web.</p>

                <p>Aside from working on my skills, I also like to be a very active person. In my free time you can find me working out, longboarding, and doing photography. If you wish to reach out to me for any project ideas, please feel free to <a href="./contact">contact me</a>.</p>
            </div>      
        </div>
  )
}

export default AboutMe;