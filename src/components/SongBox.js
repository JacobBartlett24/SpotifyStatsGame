import React from "react";

const SongBox = (props) =>{
    return(
        <div className='SongBox'>
            <img src={props.picture} alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>

        </div>
    )
}

export default SongBox;