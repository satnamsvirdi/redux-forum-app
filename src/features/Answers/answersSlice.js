import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		answerId: 123,
		qid: "1",
		body: "Narendra Modi",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1213,
		qid: "1",
		body: "It's Narendra Modi",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1223,
		qid: "1",
		body: "Jawahar Lal Nehru",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1243,
		qid: "2",
		body: "San Bay",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1235,
		qid: "1",
		body: "Manmohan Singh",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1237,
		qid: "2",
		body: "SiggeMount",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1293,
		qid: "2",
		body: "It's Nalieus",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 120903,
		qid: "2",
		body: "Nalieus is the right answer",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 1283,
		qid: "2",
		body: "Naliues",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 12563,
		qid: "2",
		body: "Santamoore",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
	{
		answerId: 12453,
		qid: "2",
		body: "New York",
		author: "Mighty Raju",
		created: "12 Sept 2019",
	},
];

const answersSlice = createSlice({
	name: "answers",
	initialState,
	reducers: {
		answerAdded(state, action) {
			state.push(action.payload);
		},
	},
});

export const { answerAdded } = answersSlice.actions;

export default answersSlice.reducer;
