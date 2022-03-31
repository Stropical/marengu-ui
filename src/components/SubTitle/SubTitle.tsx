import React from "react";
import { MarenguTheme } from "../../theme";
import { Box } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface TextProps {
    children: string;
    type: string;
    theme: any;
}

const SubTitle = (props: TextProps) => {
   return (
       <h2
        
        style={{
            font:  MarenguTheme.fonts.body,
            letterSpacing: "0.5em",
            fontWeight: "700",
            color: MarenguTheme.colors.lightgray,
            fontSize: "20px",
            marginTop: "40px",
            marginLeft: "80px",
            width: "450px"
            
        }}
        >
            {props.children}
        </h2>
   );
}

export default SubTitle;