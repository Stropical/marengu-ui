import React from "react";
import { MarenguTheme } from "../../theme";
import { Box } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface TextProps {
    children: string;
    type: string;
    theme: any;
}

const Body = (props: TextProps) => {
   return (
       <Box
        tx='text'
        {...props}
        __css={{
            width: '100%',
            height: '100%',
            background: MarenguTheme.colors.black
        }}
        />
   );
}

export default Body;