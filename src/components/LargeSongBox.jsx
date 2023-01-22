import React from "react";
import { Card, CardHeader, Heading, CardBody, Image, Box,  useColorMode} from "@chakra-ui/react";

const LargeSongBox = (props) =>{
    
    const {colorMode, toggleColorMode} = useColorMode()

    return(
        
            <Box borderRadius="md" boxShadow='2xl' border={colorMode === 'light' ? '1px' : ''} borderColor={colorMode === 'light' ? 'black' : ''}>
                <a href="#">
                    <Card maxW='lg'>
                        <CardHeader>
                            <Heading align='center' as='h2' size='lg'>
                            {props.name}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Image borderRadius="md" src={props.picture} boxSize='450px' alt="Playlist Image" />
                        </CardBody>
                    </Card>
                </a>
            </Box>
    )
}

export default LargeSongBox;