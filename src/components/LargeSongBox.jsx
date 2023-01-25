import React from "react";
import { Card, CardHeader, Heading, Text, CardBody, Image, Box,  useColorMode} from "@chakra-ui/react";

const LargeSongBox = (props) =>{
    
    const {colorMode, toggleColorMode} = useColorMode()

    return(
        
            <Box mr={20} ml={20} borderRadius="md" boxShadow='2xl' border={colorMode === 'light' ? '1px' : ''} borderColor={colorMode === 'light' ? 'black' : ''}>
                <a href="#">
                    <Card 
                    backgroundColor={props.style === 'wrong' ? 'red' : props.style === 'right' ? 'green' : ''} maxH='xl' minW='md'maxW='lg'>
                        <CardHeader>
                            <Heading align='center' as='h2' size='lg'>
                            <Text isTruncated>{props.name}</Text>
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