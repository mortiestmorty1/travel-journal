import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
function Content(){

    return(
        <div className="content-container">
            <img className="image" src="">
            </img>
            <FontAwesomeIcon icon={faLocationArrow} className="location"></FontAwesomeIcon>
            <span className="location">

            </span>
            <a href=""></a>
            <h1 className="Title"></h1>
            <span className="date-start"></span>
            <span className="date-end"></span>
            <p className="description"></p>
            
        </div>
    )
}