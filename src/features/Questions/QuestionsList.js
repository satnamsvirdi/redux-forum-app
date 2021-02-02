import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./QuestionsList.css";

const QuestionsList = () => {
	const questions = useSelector((state) => state.questions);

	const renderedQuestions = questions.map((ques) => {
		return (
			<article key={ques.id} className="question-container">
				<Link to={`/question/${ques.id}`} className="question-link">
					<h3 className="question-title">{ques.content}</h3>
				</Link>
			</article>
		);
	});

	return (
		<>
			<h2 className="question-list-heading">All Questions</h2>
			<section className="question-list">{renderedQuestions}</section>
		</>
	);
};

export default QuestionsList;
