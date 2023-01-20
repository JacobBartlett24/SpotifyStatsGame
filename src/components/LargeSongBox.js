import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

const LargeSongBox = (props) =>{
    
    return(
        
        <div className={'SongBox Large ' + props.style}>
            <img src={props.picture} alt={props.picture}></img>
            <div className="playlistName">{props.name}</div>
            {props.link}
        </div>
    )
}

export default LargeSongBox;