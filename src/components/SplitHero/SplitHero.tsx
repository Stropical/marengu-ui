import React from "react";
import { MarenguTheme } from "../../theme";
import { Flex } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

interface HeroProps {
    children: any;
}

const style = {
    width: "100%",
    height: "100%",
    backgroundColor: "#0b0b0c",
    margin: 0,
    display: "flex",
}

export const SplitHero = (props: HeroProps) => {
   return (
       <div style={style}>{props.children}</div>
   );
}