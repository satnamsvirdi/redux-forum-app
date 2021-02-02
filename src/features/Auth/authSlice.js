import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authState: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loggedin(state, action) {
			state.authState = true;
		},
		loggedout(state, action) {
			state.authState = false;
		},
	},
});

export const { loggedin, loggedout } = authSlice.actions;

export default authSlice.reducer;
