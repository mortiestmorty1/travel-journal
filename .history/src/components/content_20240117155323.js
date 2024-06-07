import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Content(props){

    return(
        <div className="content-container">
            <img className="image" src={props.item.img}>
            </img>
            <div className="section1">
                <FontAwesomeIcon icon={faLocationDot} className="Location"></FontAwesomeIcon>
                <span className="location">
                    {props.item.location}
                </span>
                <a href={props.item.googlelink}>View on Google Maps</a>
            </div>
            <h1 className="Title">{props.item.Title}</h1>
            <div className="section2">
                <span className="date-start">{props.item.datestart}</span>
                -
                <span className="date-end">{props.item.dateend}</span>
            </div>
            <p className="description">{props.item.description}</p>
            <hr></hr>
        </div>
    )
}

export default Content;