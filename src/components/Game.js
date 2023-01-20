import React, {useEffect, useState} from "react";
import LargeSongBox from "./LargeSongBox";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


const Game = () =>{

    const [searchParams] = useSearchParams();
    const [tracks, setTracks] = useState([])
    const [song, setSong] = useState()
    const [song0, setSong0] = useState()

    const getRandomTracks = () =>{
        setSong(tracks[Math.floor(Math.random()*tracks.length)]);
        setSong0(tracks[Math.floor(Math.random()*tracks.length)]);

        console.log(song)
    }

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

            setTracks(userTracks.data.items)
            }
        }
        getPlaylistTracks()
    },[tracks])

    useEffect(() => {
        if(tracks.length !== 0){
            getRandomTracks()   
        }
    }, [tracks])

    const generateNewSong = (songChoice) =>{
        if(songChoice === 'song0'){
            setSong0(tracks[Math.floor(Math.random()*tracks.length)])
        } else if(songChoice === 'song'){
            setSong(tracks[Math.floor(Math.random()*tracks.length)])
        }
    }

    const measurePopularity = (isSong) =>{
        //Clicked song, song had less
        if(song.track.popularity < song0.track.popularity && isSong){
            generateNewSong('song')
        //Clicked song0, song0 had more
        } else if(song.track.popularity < song0.track.popularity && isSong === false){
            generateNewSong('song')
        //Clicked song, song had more
        } else if(song.track.popularity > song0.track.popularity && isSong){
            generateNewSong('song0')
        //Clicked song0, song had more
        } else if(song.track.popularity > song0.track.popularity && isSong === false){
            generateNewSong('song0')
        } else if(song.track.popularity === song0.track.popularity){
            generateNewSong('song')
            generateNewSong('song0')
        }
        console.log(`song: ${song.track.name} = ${song.track.popularity}`)
        console.log(`song0: ${song0.track.name} = ${song0.track.popularity}`)

    }

    return(
        <div className="MainGame">
            <div onClick={ () => measurePopularity(true) }>
                <LargeSongBox
                name={song ? song.track.name : ''}
                picture={song ? song.track.album.images[0].url : ''}
                />
            </div>
            <div onClick={ () => measurePopularity(false) }>
                <LargeSongBox
                name={song0 ? song0.track.name : ''}
                picture={song0 ? song0.track.album.images[0].url : ''}/>
            </div>
        </div>
    )
}

export default Game;