import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
function Content(props){

    return(
        <div className="content-container">
            <img className="image" src={props.item.img}>
            </img>
            <FontAwesomeIcon icon={faLocationArrow} className="location"></FontAwesomeIcon>
            <span className="location">
                {props.item.location}
            </span>
            <a href={props.googlelink}></a>
            <h1 className="Title">{props.item.Title}</h1>
            <span className="date-start">{props.item.datestart}</span>
            <span className="date-end">{props.item.dateend}</span>
            <p className="description">{props.item.description}</p>
            
        </div>
    )
}