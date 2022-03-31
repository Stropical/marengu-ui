import React from "react";
import { MarenguTheme } from "../../theme";
import { Box } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface TextProps {
    children: string;
}

const style = {
    fontFamily: "Raleway",
    letterSpacing: "0.1em",
    height: "9vw",
    fontSize: "7.5vw",
    fontWeight: "300",
    color: "#fff",
    
    marginLeft: "50px",
    padding: "20px",
}

const Title = (props: TextProps) => {
   return (
       <div style={style}>
            {props.children}
        </div>
   );
}

export default Title;