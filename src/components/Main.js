import React, { useEffect } from 'react'
import SongBox from './SongBox'
import './Main.css'
import { useState } from 'react'
import axios from 'axios'

const Main = (props) =>{

    const [playlists, setPlaylists] = useState();
    const [display, setDisplay] = useState([])

    useEffect(() =>{
        const getUserProfile = async () =>{
            let playlists = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${props.token}`
                },
                params: {
                    limit: 20
                }
            })
            setPlaylists(playlists.data.items)
        }
        getUserProfile();
    }, [props.token]);

    useEffect(() =>{
        if(playlists && display.length === 0){
            setDisplay(playlists.map(pl => <SongBox />))
        }
        console.log(display)
    }, [display, playlists])
    
    return(
        
        <div id='MainContainer'>
            <SongBox />
        </div>
    )
}

export default Main;