import React from "react";
import { Card, CardHeader, Heading, CardBody, Image} from "@chakra-ui/react";

const LargeSongBox = (props) =>{
    
    return(
        
        <Card maxW='lg'>
            <CardHeader>
                <Heading align='center' as='h2' size='lg'>
                {props.name}

                </Heading>
            </CardHeader>
            <CardBody>
                <Image src={props.picture} boxSize='450px' alt="Playlist Image" />
            </CardBody>                        
        </Card>    
    )
}

export default LargeSongBox;