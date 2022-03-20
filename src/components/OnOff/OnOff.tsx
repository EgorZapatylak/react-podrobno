import React from 'react';

type OnOffPropsType = {
     on: boolean
    onChange:(on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorstyle = {
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };


    return (
        <div>
            <div style={onstyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offstyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorstyle}></div>
        </div>
    );
};

