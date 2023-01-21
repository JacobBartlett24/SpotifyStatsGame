import {Grid, GridItem, SimpleGrid, Text, Box} from '@chakra-ui/react';

export default function PlaylistContainer(props) {
    return (
        <Box display="flex" flexDirection="column" pt={50}pr={200} pl={200}>
            <Text fontSize='4xl'align='center'>Choose A Playlist</Text>
            <SimpleGrid minChildWidth='250px' p={20} spacing='40px'  gap={6}>
                {props.playlists}
            </SimpleGrid>
        </Box>
    )
}