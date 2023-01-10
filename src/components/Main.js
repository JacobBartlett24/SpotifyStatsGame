import React, { useEffect } from 'react'
import SongBox from './SongBox'
import './Main.css'
import { useState } from 'react'
import axios from 'axios'

const Main = () =>{

    const [token,setToken] = useState('');
    const [data, setData] = useState();

    useEffect(() =>{
        setToken(
            localStorage.getItem('token')
        )
    }, [])

    useEffect(() =>{
        const populateMain = async () =>{
            setData(
            axios.get(
                "https://api.spotify.com/v1/me/playlists", {
                    params:  {limit: 20, offset: 0},
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                }
            ));
        }
        populateMain()
        console.log(data)
    }, [])

    return(
        <div id='MainContainer'>
            <SongBox />
        </div>
    )
}

export default Main;