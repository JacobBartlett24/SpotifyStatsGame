import React from "react";
import './Header.css'
import {Button, useColorMode} from '@chakra-ui/react'
import {BsFillMoonFill, BsMoon} from 'react-icons/bs'

const Header = () =>{

    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <div id='HeaderContainer'>
            <Button leftIcon={colorMode === 'light' ? <BsFillMoonFill /> : <BsMoon />}ml={2} variant='link' onClick={toggleColorMode}>
            </Button>
            <div className="headerTitle">
                Spotify Music Stats Game
            </div>
        </div>
    )
}

export default Header;