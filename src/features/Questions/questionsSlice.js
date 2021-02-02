import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "1", content: "Who is the current PM of India?" },
	{ id: "2", content: "Which is the largest port in USA?" },
];

const questionsSlice = createSlice({
	name: "questions",
	initialState,
	reducers: {
		questionAdded(state, action) {
			state.push(action.payload);
		},
	},
});

export const { questionAdded } = questionsSlice.actions;

export default questionsSlice.reducer;
