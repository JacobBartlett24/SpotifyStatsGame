import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Box, Text, Divider, ButtonGroup, Button, } from '@chakra-ui/react'
import SpotifyLogo from './spotify.svg'
import { FaSpotify } from 'react-icons/fa'

export default function LoginBox(props) {
    return (
        <Card align='center' maxW='sm'>
            <CardHeader>
                <Heading align='center' as='h2' size='lg'>Login</Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing={4} divider={<StackDivider />}>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup >
                    <Button size='lg' leftIcon={<FaSpotify />}Heading colorScheme='green'>Login With Spotify</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}