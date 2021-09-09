import React from 'react';
import './projects.css';

function Project (props) {
    return (
        <div class="container">

            <div class="card">
                <div class="overview" >
                    <p>{props.overview}</p>
                </div>
                <div class="mockup">
                    <h1>{props.mockup}</h1>
                    <img>{props.image}</img>
                    <div class="links">
                        <button class="btn-deployed" onclick="window.location.{props.btn-deployed}">Deployed</button>
                        <button class="btn-github" onclick="window.location.{props.btn-github}">GitHub</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Project;