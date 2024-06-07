import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Content(props){

    return(
        <div className="content-container">
            <img className="image" src={props.item.img}>
            </img>
            <div className="section1">
                <FontAwesomeIcon icon={faLocationArrow} className="Location"></FontAwesomeIcon>
                <span className="location">
                    {props.item.location}
                </span>
                <a href={props.item.googlelink}>View on Google Maps</a>
            </div>
            <br/>
            <h1 className="Title">{props.item.Title}</h1>
            <span className="date-start">{props.item.datestart}</span>
            <span className="date-end">{props.item.dateend}</span>
            <p className="description">{props.item.description}</p>
        </div>
    )
}

export default Content;