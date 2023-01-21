import React, {useEffect, useState} from "react";
import LargeSongBox from "./LargeSongBox";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ChoiceBoard from "./ChoiceBoard";


const Game = () =>{

    const [searchParams] = useSearchParams();
    const [tracks, setTracks] = useState([])
    const [song, setSong] = useState()
    const [song0, setSong0] = useState()
    const [style, setStyle] = useState('')
    const [counter, setCounter] = useState(0)

    const getRandomTracks = () =>{
        setSong(tracks[Math.floor(Math.random()*tracks.length)]);
        setSong0(tracks[Math.floor(Math.random()*tracks.length)]);
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
            setStyle('wrong')
            setTimeout(() => {
                setStyle('')
            }, 1000);
            setCounter(0)
        //Clicked song0, song0 had more
        } else if(song.track.popularity < song0.track.popularity && isSong === false){
            generateNewSong('song')
            setStyle('right')
            setTimeout(() => {
                setStyle('')
            }, 1000);
            setCounter(counter + 1)
        //Clicked song, song had more
        } else if(song.track.popularity > song0.track.popularity && isSong){
            generateNewSong('song0')
            setStyle('right')
            setTimeout(() => {
                setStyle('')
            }, 1000);
            setCounter(counter + 1)
        //Clicked song0, song0 had less
        } else if(song.track.popularity > song0.track.popularity && isSong === false){
            generateNewSong('song0')
            setStyle('wrong')
            setCounter(0)
            setTimeout(() => {
                setStyle('')
            }, 1000);
        } else if(song.track.popularity === song0.track.popularity){
            generateNewSong('song')
            generateNewSong('song0')
        }
        console.log(`song: ${song.track.name} = ${song.track.popularity}`)
        console.log(`song0: ${song0.track.name} = ${song0.track.popularity}`)
    }

    return(
        <div className="MainGame">
            <div id="counter">
                Counter: {counter}
            </div>
            <ChoiceBoard 
            innerHTML={
                <>
                    <div onClick={ () => measurePopularity(true) }>
                        <LargeSongBox
                        name={song ? song.track.name : ''}
                        picture={song ? song.track.album.images[0].url : ''}
                        style={style}/>
                    </div>
                    <div onClick={ () => measurePopularity(false) }>
                        <LargeSongBox
                        name={song0 ? song0.track.name : ''}
                        picture={song0 ? song0.track.album.images[0].url : ''}
                        style={style}/>
                    </div>
                </>
            }/>
                
            
        </div>    
    )
}

/*<div className="MainGame">
            <div id="counter">
                Counter: {counter}
            </div>
            <div id="choiceBoard">
                <div onClick={ () => measurePopularity(true) }>
                    <LargeSongBox
                    name={song ? song.track.name : ''}
                    picture={song ? song.track.album.images[0].url : ''}
                    style={style}/>
                </div>
                <div onClick={ () => measurePopularity(false) }>
                    <LargeSongBox
                    name={song0 ? song0.track.name : ''}
                    picture={song0 ? song0.track.album.images[0].url : ''}
                    style={style}/>
                </div>
            </div>
        </div>
*/

export default Game;