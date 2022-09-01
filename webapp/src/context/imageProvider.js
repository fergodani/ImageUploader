import React, { useReducer, useEffect, createContext } from "react";
import { imageReducer } from "./imageReducer";
import { ImageContext } from "./imageContext";

let initialState = {
	percent: 0,
    existsImage: false,
	isLoading: false,
    url: ""
};

export const ImageProvider = ({ children }) => {

	const [state, dispatch] = useReducer(imageReducer, initialState, () => {
		return  initialState;
	});

	const setState = (imageState) => {
		dispatch({ type: "setState", payload: imageState });
	};

	const setPercent = (value) => {
		dispatch({ type: "setPercent", payload: value});
	};

	return (
		<ImageContext.Provider
			value={{ state, setState, setPercent}}
		>
			{children}
		</ImageContext.Provider>
	);
};