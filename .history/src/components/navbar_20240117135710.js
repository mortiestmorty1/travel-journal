import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Navbar(){
    return(
        <div className="Nav-container">
            <nav className="navbar">
                <FontAwesomeIcon icon={faEarth}>
                    <span className="title">
                        my travel journal
                    </span>
                </FontAwesomeIcon>
            </nav>
        </div>
    )
}
export default Navbar;