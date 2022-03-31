import React from "react";
import { MarenguTheme } from "../../theme";
import { Flex } from "reflexbox";

// import { Box, Flex } from 'reflexbox'

export interface GridProps {
    children: any;
    rows: number;
    colums: number;
    gap: number;

}

const style = {
    width: "45%",
    height: "100%",
    display: "grid"
}

export const Grid = (props: GridProps) => {
   return (
       <div style={style}> {props.children} </div>
   );
}