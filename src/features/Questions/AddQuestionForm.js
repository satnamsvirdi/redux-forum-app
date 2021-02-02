import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import "./AddQuestionForm.css";
import { questionAdded } from "./questionsSlice";

const AddQuestionForm = () => {
	const [content, setContent] = useState("");

	const dispatch = useDispatch();

	const handlePostChange = (e) => {
		setContent(e.target.value);
	};

	const onSavePostClicked = () => {
		if (content) {
			dispatch(
				questionAdded({
					id: nanoid(),
					content,
				})
			);

			setContent("");
		}
	};

	return (
		<>
			<form className="form">
				<textarea
					className="form-control-textarea mb-0.5"
					name="question-box"
					id=""
					cols="10"
					rows="6"
					placeholder="Ask your question here"
					onChange={handlePostChange}
					value={content}
				></textarea>
				<button
					className="btn btn-primary ml-auto"
					type="button"
					onClick={onSavePostClicked}
				>
					Post
				</button>
			</form>
		</>
	);
};

export default AddQuestionForm;
