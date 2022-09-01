import React, { useContext, useEffect } from "react";
import Drag from './Drag';
import Image from "./Image";
import Loader from "./Loader";
import { ImageContext } from "../context/imageContext";

export default function Card(){
    const { state, clearState } = useContext(ImageContext);
    const existsImage = state.existsImage;
    const isLoading = state.isLoading;

    useEffect(() => {
        
    }, [state]);

    return (
        <div id="card">          
            { !existsImage &&
            <Drag/>
            }
            { existsImage && !isLoading &&
            <Image/>
            }
            { isLoading && 
            <Loader/>
            }
        </div>
    );
}