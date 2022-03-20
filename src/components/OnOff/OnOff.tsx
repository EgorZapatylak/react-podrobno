import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
}

export function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);

    const onstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "green" : "white"
    };
    const offstyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorstyle = {
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };


    return (
        <div>
            <div style={onstyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offstyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorstyle}></div>
        </div>
    );
};

