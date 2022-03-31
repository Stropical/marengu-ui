import React from "react";
import { MarenguTheme } from "../../theme";
import { Flex } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface TextProps {
    children: any;
    type: string;
    theme: any;
}

const style = {
    width: "45%",
    height: "100%",
    margin: 0
}

export const HeroLeft = (props: TextProps) => {
   return (
       <div style={style}> {props.children} </div>
   );
}