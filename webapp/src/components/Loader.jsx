import React from "react";

export default function Loader(props){

    return (
        <div id="loader">
            <h2>Uploading...</h2>
            <div id="line-base"></div>
            <div id="line"></div>
        </div>
    );
}