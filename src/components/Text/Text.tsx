import React from "react";
import { MarenguTheme } from "../../theme";
import { Box } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface TextProps {
    children: string;
    type: string;
    theme: any;
}

const Text = (props: TextProps) => {
   return (
       <Box
        tx='text'
        {...props}
        __css={{
            font:  MarenguTheme.fonts.body,
            fontWeight: "600",
            color: MarenguTheme.colors.lightgray,
            fontSize: MarenguTheme.fontSizes[1],
            letterSpacing: MarenguTheme.fontSpacing[2],
        }}
        />
   );
}

export default Text;