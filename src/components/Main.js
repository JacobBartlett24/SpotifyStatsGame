import React from 'react'
import SongBox from './SongBox'
import './Main.css'



const Main = () =>{

    let clientId = '2925bd9799f14dc494db1806a83a4ab8';
    let clientSecret = 'c1664067fccb44ca98bb738f153d282e';

    return(
        <div id='MainContainer'>
            <SongBox />
        </div>
    )
}

export default Main;