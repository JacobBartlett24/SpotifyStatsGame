import {SimpleGrid, Text, Box} from '@chakra-ui/react';

export default function PlaylistContainer(props) {
    return (
        <Box display="flex" flexDirection="column" justifyItems='center' alignItems='center' pt={50}>
            <Text fontSize='4xl' minWidth='200px' align='center'>Choose A Playlist</Text>
            <SimpleGrid minChildWidth='250px' minChildHeight='250px' minWidth='60vw' p={20} spacing='40px'  gap={6}>
                {props.playlists}
            </SimpleGrid>
        </Box>
    )
}