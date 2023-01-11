import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Main.css'
import LandingPage from "./LandingPage";

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
            <a className={token ? "hidden" : "token"}href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}>Login to Spotify</a>
            <div>{token ? <LandingPage token={token}/> : ""}</div>
        </div>
    )
}

export default Login;