import React, {useEffect, useState} from "react";
import LargeSongBox from "./LargeSongBox";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


const Game = () =>{

    const [searchParams] = useSearchParams();
    const[tracks, setTracks] = useState([])

    useEffect(() =>{

        const getPlaylistTracks = async () =>{
            if(tracks.length === 0){
            let userTracks = 
            await axios.get
            (`https://api.spotify.com/v1/playlists/${searchParams.get('id')}/tracks`, 
            {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    params: {

                    }
            })

            setTracks(userTracks)
            }
        }
        getPlaylistTracks()
        console.log(tracks)
    },[tracks])

    const getRandomTracks = () =>{
        
    }

    return(
        <div className="MainGame">
            <LargeSongBox />
            <LargeSongBox />
        </div>
    )
}

export default Game;