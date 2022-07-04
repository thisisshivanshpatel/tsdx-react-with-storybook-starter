import React from "react";
import {FC} from "react";

export const GreenButton:FC = (props) => {

    return (
        <button style={{backgroundColor: '#00ff00'}}>
            {props.children}
        </button>
    );
}