import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom";
import SongPage from "./SongPage";

const SongBox = (props) =>{
    
    const [tracks, setTracks] = useState([])
    const [displayLink, setDisplayLink] = useState(false)

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

    useEffect(() =>{
        const setupGame = () =>{
            if(tracks.length !== 0){
                setDisplayLink(true)
            }
        }
        setupGame();
        console.log(displayLink)
    }, [tracks])

    return(
        
        <div onClick={() => getPlaylistTracks(props.id,props.token)} className='SongBox'>
            <img src={props.picture} alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>
            {displayLink ? <Link className="Link" to="/SongPage" /> : "" }
        </div>
    )
}

export default SongBox;