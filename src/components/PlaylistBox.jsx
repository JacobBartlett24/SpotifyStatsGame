import { Card, CardHeader, CardBody, Image, Heading, useColorMode } from '@chakra-ui/react'

export default function PlaylistBox(props) {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Card border={colorMode === 'light' ? '1px' : ''} borderColor={colorMode === 'light' ? 'black' : ''} boxShadow='md'maxW='sm'>
            <CardHeader>
                <Heading align='center' as='h2' size='lg'>
                    {props.playlistName}
                </Heading>
            </CardHeader>
            <CardBody>
                <Image borderRadius="md" boxSize="300px"src={props.playlistImage} alt="Playlist Image" />
            </CardBody>                        
        </Card>
    )

}