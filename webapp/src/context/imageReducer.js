export const imageReducer = (
	state,
	action,
) => {
	switch (action.type) {
		case "setState":
            state = action.payload
			console.log("state changing to ")
			console.log(state)
			return {
				...state
			};
		case "setPercent":
			console.log(action.payload)
			state.percent = action.payload;
			return {
				...state
			};
		default:
			return state;
	}
};