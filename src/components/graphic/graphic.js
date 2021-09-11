import React from 'react';
import './graphic.css';
import '../../../src/graphic.json';


function Graphic () {

    return(
        <div class="container" id="graphic">
            <div class="graphic-card">
                <h1 class="name">GOOGLE PLAY</h1>
                        <img id="google" src="../public/Assets/Graphic Design/Google.png" alt="Graphic image of Google Play logo."/>
            </div>
        </div>
    )

}

export default Graphic;