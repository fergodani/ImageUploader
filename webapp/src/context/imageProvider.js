import React, { useReducer, useEffect, createContext } from "react";
import { imageReducer } from "./imageReducer";
import { ImageContext } from "./imageContext";

let initialState = {
	image: null,
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

	const setLoading = (value) => {
		dispatch({ type: "setLoading", payload: value});
	};

	const clearState = () => {
		dispatch({ type: "clearState"})
	}

	return (
		<ImageContext.Provider
			value={{ state, setState, setLoading, clearState}}
		>
			{children}
		</ImageContext.Provider>
	);
};