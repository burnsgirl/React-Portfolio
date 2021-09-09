import React from 'react';
import './projects.css';

function Projects (props) {
    return (
        <div class="container">

            <div class="card">
                <div class="overview" >
                    <p>{props.overview}</p>
                </div>
                <div class="mockup">
                    <h1>{props.mockup}</h1>
                    <img src={props.image}></img>
                    <div class="links">
                        <button class="btn-deployed" target='_blank' onclick="window.location={props.deployed}">Deployed</button>
                        <button class="btn-github" target='_blank' onclick="window.location={props.github}">GitHub</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Projects;