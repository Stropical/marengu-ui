import React from "react";

export interface TitleProps {
    text: string;
}

const Title = (props: TitleProps) => {
    const style = {
        width: "100%",
        fontSize: "6vw",
        fontWeight: 300,
        letterSpacing: "0.1em",
        color: "white",
        marginLeft: "50px",
        padding: "20px",
        height: "7vw",
    }
    return <p style={style}>{props.text}</p>
}

export default Title;