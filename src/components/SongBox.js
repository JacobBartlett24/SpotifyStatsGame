import React from "react";
import axios from "axios";
import { useState } from "react";

const SongBox = (props) =>{
    
    const [tracks, setTracks] = useState([])

    const getPlaylistTracks = async (id, token) =>{
        let userTracks = 
        await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, 
        {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    
                }
        })
        setTracks(userTracks)
        console.log(tracks)
        
    }

    const setupGame = (id, token) =>{
        getPlaylistTracks(id, token);
        
    }

    return(
        <div onClick={() => setupGame(props.id,props.token)} className='SongBox'>
            <img src={props.picture} alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>
            
        </div>
    )
}

export default SongBox;