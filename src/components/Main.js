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
        
        console.log(display) 
        const displayPlaylists = () =>{
            if(playlists && display.length === 0){
            setDisplay(playlists.map(pl => <SongBox
                                                token={props.token}
                                                id={pl.id}
                                                key={pl.id} 
                                                picture={pl.images[0].url}
                                                name={pl.name}/>))
            }
            console.log(display)
        }
        displayPlaylists()
        

    }, [display,playlists])
    
    return(
        
        <div id='MainContainer'>
            <div className="displayPlaylists">
                
                {display}
            </div>
        </div>
    )
}

export default Main;