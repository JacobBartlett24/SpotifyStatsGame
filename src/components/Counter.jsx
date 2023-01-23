// chakra component that displays a counter

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Counter = (props) => {
    return (
        <Box mt={5}>
            <Text fontSize='6xl'>{props.count}</Text>
        </Box>
    );
    }

export default Counter;