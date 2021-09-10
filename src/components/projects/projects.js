import React from 'react';
import './projects.css';
import '../../../src/project.json';

function Projects (props) {
    return (
        <div class="container">

        {props.project.map((project, index) =>
        
            <div class="card" key = {index}>
                <div class="overview" >
                    <p>{project.overview}</p>
                </div>
                <div class="mockup">
                    <h1>{project.mockup}</h1>
                    <img src={project.image} alt={project.alt}></img>
                    <div class="links">
                        <button class="btn-deployed" target='_blank' onclick="window.location={project.deployed}">Deployed</button>
                        <button class="btn-github" target='_blank' onclick="window.location={project.github}">GitHub</button>
                    </div>
                </div>  
            </div>
        )}
        </div>
    )
}

export default Projects;