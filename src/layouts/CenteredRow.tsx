import React from "react";
import {FC} from "react";

export const CenteredRow:FC = (props) => {

    return (
        <div style={{width: '100%', height: '100%'}}>
            {props.children}
        </div>
    );
}