import React, { useContext } from "react";

export default function Image(props){

    return (
        <div id="url">
            <p id="urltext">{props.url}</p>
            <button id="copy" onClick={() => {navigator.clipboard.writeText(props.url)}}>Copy Link</button>
        </div>
    );
}