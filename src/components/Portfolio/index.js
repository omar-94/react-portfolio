import React from "react";
import './style.css';
import projects from "../../utils/projects.json"

const Portfolio = () => {

  return (
    <div className="about-me" id="about-me">
      <h3 className="text-center" id="about-me-title"> PORTFOLIO </h3>
      <hr id="line-design"></hr>
      <div className="web-dev-projects py-5 bg-light">
        <div className="col container">
          <div className="row">
            {projects.map((project) => {
              return (
                <div className="col-md-4 col-sm-6">
                <div className="card mb-4 box-shadow">
                  <a href={project.appLink} target="_blank" rel="noreferrer">
                  <img className="card-img-top" style={{ height: '225px', width: '100%', display: 'block' }} src={project.image} alt="Project"></img>
                  </a>
                  <div className="card-body">
                  <p className="card-text"> <strong> {project.title}</strong> </p>
                  <p><a className="repo-link" href={project.gitHubUrl} target="_blank" rel="noreferrer"> GitHub Repository </a></p>
                  </div>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Portfolio;