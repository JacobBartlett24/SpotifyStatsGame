import React from "react";
import './Header.css'
import {Button, useColorMode} from '@chakra-ui/react'

const Header = () =>{

    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <div id='HeaderContainer'>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <div className="headerTitle">
                Spotify Music Stats Game
            </div>
        </div>
    )
}

export default Header;