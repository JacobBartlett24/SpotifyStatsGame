import { Grid } from '@chakra-ui/react'

export default function ChoiceBoard(props){
    return(
    <Grid templateColumns='1fr 1fr' alignItems='center' justifyItems='center'>
        {props.innerHTML}
    </Grid>
    )
}