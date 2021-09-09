import React from 'react';
import './projects.css';

function Project () {
    return (
        <div class="container">

            <div class="card">
                <div class="overview" >
                    <p></p>
                </div>
                <div class="mockup">
                    <h1></h1>
                    <img />
                    <div class="links">
                        <button class="btn-deployed" onclick="window.location.">Deployed</button>
                        <button class="btn-github" onclick="window.location.">GitHub</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Project;