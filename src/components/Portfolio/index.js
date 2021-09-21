import React from "react";
import './style.css';

const Portfolio = () => {

  return (
    <div class="web-dev-projects py-5 bg-light">
            <div class="col container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="card mb-4 box-shadow">
                            <a href="https://evperkinsjr.github.io/movie-drink-matchmaker/">
                                <img className="card-img-top" style={{ height: '225px', width: '100%', display: 'block' }} src="" alt="Project"></img>
                            </a>
                            <div className="card-body">
                                <p className="card-text"> <strong> Movie and Drink Matchmaker</strong> </p>
                                <p><a href="https://github.com/evperkinsjr/movie-drink-matchmaker"> GitHub Repo </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Portfolio;