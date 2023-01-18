import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import LargeSongBox from "./LargeSongBox";
import { Link, useNavigate, createSearchParams } from "react-router-dom";



const SongPage = (props) =>{

    const [searchParams] = useSearchParams();
    const [playlistId, setPlaylistId] = useState('')
    const [token, setToken] = useState('')
    const [playlistInfo,setPlaylistInfo] = useState();
    const navigate = useNavigate()

    const selectedPlaylist = () =>{
        navigate({
            pathname: "/Game",
            search: createSearchParams({
                id: playlistId,
            }).toString()
        })
    }


    useEffect(() => {
        if(searchParams.get("id")){
            setPlaylistId(searchParams.get("id"))
        }
        setToken(localStorage.getItem('token'))
    }, [playlistId, searchParams])

    useEffect(() =>{
        if(token && !playlistInfo){
            const getSelectedPlaylist = async () =>{
                setPlaylistInfo(await axios.get
                    (`https://api.spotify.com/v1/playlists/${playlistId}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        params: {
    
                        }
                    }))
            }
            getSelectedPlaylist()
        }
        console.log(playlistInfo)
    },[playlistId,playlistInfo, token])

    return(
        <div className="SongPageBackground">
            <div onClick={selectedPlaylist}>
                {playlistInfo ?
                    <LargeSongBox
                        token={props.token}
                        key={playlistInfo.data.id}
                        picture={playlistInfo.data.images[0].url}
                        name={playlistInfo.data.name}
                        />: ''}
            </div>
        </div>
    )
}

export default SongPage;