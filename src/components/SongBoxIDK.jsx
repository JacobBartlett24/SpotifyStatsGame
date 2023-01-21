import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Box, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'

export default function SongBoxIDK(props) {
    return (
        <Card maxW='sm'>
            <CardHeader>
                <Heading align='center' as='h2' size='lg'>
                {props.playlistName}

                </Heading>
            </CardHeader>
            <CardBody>
                <Image boxSize="300px"src={props.playlistImage} alt="Playlist Image" />
            </CardBody>                        
        </Card>
    )

}