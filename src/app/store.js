import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "../features/Questions/questionsSlice";
import answersReducer from "../features/Answers/answersSlice";
import authReducer from "../features/Auth/authSlice";

export default configureStore({
	reducer: {
		questions: questionsReducer,
		answers: answersReducer,
		auth: authReducer,
	},
});
