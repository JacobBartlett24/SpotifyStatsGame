import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    createSearchParams,
    useNavigate
  } from "react-router-dom";
import SongPage from "./SongPage";

const SongBox = (props) =>{
    
    const [tracks, setTracks] = useState([])
    const [displayLink, setDisplayLink] = useState(false)
    const navigate = useNavigate();

    const selectedPlaylist = (id) =>{
        navigate({
            pathname: "/SongPage",
            search: createSearchParams({
                id: id,
            }).toString()
        })
    }

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
        selectedPlaylist(id);
        setTracks(userTracks)
        
    }

    useEffect(() =>{
        const setupGame = () =>{
            if(tracks.length !== 0){
                setDisplayLink(true)
            }
        }
        setupGame();
    }, [tracks])

    return(
        
        <div onClick={() => getPlaylistTracks(props.id,props.token)} className='SongBox'>
            <img src={props.picture} alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>
        </div>
    )
}

export default SongBox;