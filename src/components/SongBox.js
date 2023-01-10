import React from "react";

const SongBox = (props) =>{
    return(
        <div className='SongBox'>
            <img alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>

        </div>
    )
}

export default SongBox;