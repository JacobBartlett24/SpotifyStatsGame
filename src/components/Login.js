import React, { useEffect, useState } from "react";
import './Main.css'
import LandingPage from "./LandingPage";
import SpotifyLogo from './spotify.svg'
import LoginBox from "./LoginBox";

const Login = () =>{

    const [token, setToken] = useState('')

    const clientId = '2925bd9799f14dc494db1806a83a4ab8';
    const redirectUri = 'http://localhost:3000/';
    const responseType = 'token'
    const authEndpoint = 'https://accounts.spotify.com/authorize'

    useEffect(() =>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ''
            window.localStorage.setItem("token",token)

        }
        setToken(token)


    }, [])

    return(
        <div>
            <LoginBox url={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}/>
        </div>
    )
}

export default Login;

/* <div className="loginMainContainer">
            <div className={token ? "hidden" : "loginMain"}>
                <h1 className="loginTitle">Spotify Music Stats Game</h1>
                <div className="login">
                    <h2 className="loginBoxTitle">
                        Login
                    </h2>
                    <a className={token ? "hidden" : "token"}href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}>
                        <img className='logo'alt='Spotify Logo' src={SpotifyLogo}/>
                        Login to Spotify
                    </a>
                </div>
            </div>
            <div>{token ? <LandingPage token={token}/> : ""}</div>
</div> */