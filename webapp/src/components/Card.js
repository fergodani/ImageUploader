import React from "react";
import Drag from './Drag';

export default function Card(props){

    return (
        <div id="card">
            <h2>Upload your image</h2>
            <h4>File should be Jpeg, Png...</h4>
            <Drag/>
            <h4>Or</h4> 
            <button>Choose a file</button>
        </div>
    );
}