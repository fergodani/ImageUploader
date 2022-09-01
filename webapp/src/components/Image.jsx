import React, { useContext } from "react";
import { ImageContext } from "../context/imageContext";
import Url from "./Url";

export default function Image(){
    const { state } = useContext(ImageContext);

    return (
        <div id="image">
            <img id="tick" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="tick"/>
            <h2>Uploaded Successfully!</h2>
            <img id="result" src={state.url} alt="image uploaded"/>
            <Url url={state.url}/>
        </div>
    );
}