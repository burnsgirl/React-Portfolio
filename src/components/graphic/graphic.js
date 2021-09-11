import React from 'react';
import './graphic.css';
import '../../../src/graphic.json';


function Graphic (props) {

    return(
        <div class="container" id="graphic">
            <div class="graphic-card">
                <h1 class="name">{props.name}</h1>
                        <img id={"img" + props.id} src={props.image} alt={props.alt}/>
            </div>
        </div>
    )

}

export default Graphic;