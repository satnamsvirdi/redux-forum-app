import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { answerAdded } from "./answersSlice";

const AddAnswer = ({ matchId }) => {
	const [answer, setAnswer] = useState("");

	const dispatch = useDispatch();

	const handleAnswerSubmit = () => {
		if (answer) {
			dispatch(
				answerAdded({
					answerId: nanoid(),
					qid: matchId,
					body: answer,
					author: "Mighty Raju",
					created: "23 Dec 2020",
				})
			);

			setAnswer("");
		}
	};

	return (
		<>
			<form className="form mb-0.5">
				<textarea
					className="form-control-textarea"
					name=""
					id=""
					cols=""
					rows="4"
					placeholder="Add your answer here"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				></textarea>
				<button
					className="btn btn-primary ml-auto"
					type="button"
					onClick={handleAnswerSubmit}
				>
					Add Answer
				</button>
			</form>
		</>
	);
};

export default AddAnswer;
