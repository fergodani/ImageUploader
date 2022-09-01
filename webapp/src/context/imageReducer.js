export const imageReducer = (
	state,
	action,
) => {
	switch (action.type) {
		case "setState":
            state.url = action.payload.url;
            state.existsImage = true;
			return {
				...state
			};
		case "setLoading":
			console.log("load state changed to " + action.payload)
			state.isLoading = action.payload;
			return {
				...state
			};
		case "clearState":
			state = {
				image: null,
    			existsImage: false,
				isLoading: false,
    			url: ""
			}
			return {
				...state
			};
		default:
			return state;
	}
};